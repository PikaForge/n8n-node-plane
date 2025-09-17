import { IDataObject, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodePropertyOptions, INodeType, INodeTypeDescription, NodeConnectionType } from "n8n-workflow";
import { constructRoute } from "./api/routes";
import { OperationNodeProperties } from "./common/operation-node-properties";
import { planeApiRequest, prepareRequestBody } from "./GenericFunctions";
import { CycleProperties } from "./properties/cycle";
import { CycleIssueProperties } from "./properties/cycle-issue";
import { IssueProperties } from "./properties/issue";
import { LabelProperties } from "./properties/label";
import { LinkProperties } from "./properties/link";
import { ModuleProperties } from "./properties/module";
import { ModuleIssueProperties } from "./properties/module-issue";
import { ProjectProperties } from "./properties/project";
import { StateProperties } from "./properties/state";
import { AllOperations, AnyOperation, DefaultOperations } from "./types/operation";
import { PlaneResource, Resource } from "./types/resource";
import { ParameterUtils } from "./utils/parameters";

export class Plane implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Plane',
        name: 'plane',
        group: ['output'],
        icon: { light: 'file:plane-light.svg', dark: 'file:plane-dark.svg' },
        version: 1,
        subtitle: '={{$parameter["resource"]}}:{{$parameter["operation"]}}',
        description: 'Consume Plane API',
        defaults: {
            name: 'Plane',
        },
        usableAsTool: true,
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
            {
                name: 'planeApi',
                required: true,
            }
        ],
        properties: [
            // --------------------------------------------------
            //         Resource
            // --------------------------------------------------
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    PlaneResource.getPropertyOptions(Resource.PROJECT),
                    PlaneResource.getPropertyOptions(Resource.STATE),
                    PlaneResource.getPropertyOptions(Resource.LABEL),
                    PlaneResource.getPropertyOptions(Resource.LINK),
                    PlaneResource.getPropertyOptions(Resource.ISSUE),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_ACTIVITY),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_COMMENT),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_TYPE),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_PROPERTIES),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_PROPERTY_OPTIONS),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_PROPERTY_VALUES),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_ATTACHMENTS),
                    PlaneResource.getPropertyOptions(Resource.MODULE),
                    PlaneResource.getPropertyOptions(Resource.MODULE_ISSUE),
                    PlaneResource.getPropertyOptions(Resource.CYCLE),
                    PlaneResource.getPropertyOptions(Resource.CYCLE_ISSUE),
                    PlaneResource.getPropertyOptions(Resource.INTAKE_ISSUE),
                    PlaneResource.getPropertyOptions(Resource.WORKLOGS),
                    PlaneResource.getPropertyOptions(Resource.MEMBERS),
                ],
                default: '',
            },

            OperationNodeProperties.create(Object.values(Resource), Object.values(AllOperations), {
                displayName: 'Workspace Slug',
                name: 'workspaceSlug',
                type: 'string',
                required: true,
                default: '',
            }),

            OperationNodeProperties.create(
                Object.values(Resource).filter(r => r !== Resource.PROJECT),
                Object.values(AllOperations),
                {
                    displayName: 'Project Name or ID',
                    name: 'projectId',
                    required: true,
                    type: 'options',
                    description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
                    typeOptions: {
                        loadOptionsDependsOn: ['workspaceSlug'],
                        loadOptionsMethod: 'getProjects',
                    },
                    default: '',
                }
            ),

            OperationNodeProperties.create(
                [
                    Resource.LINK,
                    Resource.ISSUE_ACTIVITY,
                    Resource.ISSUE_COMMENT,
                    Resource.ISSUE_PROPERTY_VALUES,
                    Resource.ISSUE_ATTACHMENTS
                ],
                Object.values(AllOperations),
                {
                    displayName: 'Issue ID',
                    name: 'issueId',
                    type: 'string',
                    required: true,
                    default: '',
                }
            ),

            OperationNodeProperties.create(Resource.MODULE_ISSUE, Object.values(AllOperations), {
                displayName: 'Module Name or ID',
                name: 'moduleId',
                required: true,
                type: 'options',
                description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
                typeOptions: {
                    loadOptionsDependsOn: ['workspaceSlug', 'projectId'],
                    loadOptionsMethod: 'getModules',
                },
                default: '',
            }),


            // --------------------------------------------------
            //         Operations
            // --------------------------------------------------
            ...ProjectProperties,
            ...StateProperties,
            ...LabelProperties,
            ...LinkProperties,
            ...IssueProperties,
            // ...IssueActivityProperties,
            // ...IssueCommentProperties,
            // ...IssueTypeProperties,
            // ...IssuePropertiesProperties,
            // ...IssuePropertyOptionsProperties,
            // ...IssuePropertyValuesProperties,
            // ...IssueAttachmentsProperties,
            ...ModuleProperties,
            ...ModuleIssueProperties,
            ...CycleProperties,
            ...CycleIssueProperties,
            // ...IntakeIssueProperties,
            // ...WorklogsProperties,
            // ...MembersProperties,
        ]
    }

    methods = {
        loadOptions: {
            async getProjects(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
                const [method, route] = constructRoute(Resource.PROJECT, DefaultOperations.LIST, {
                    workspaceSlug: this.getCurrentNodeParameter('workspaceSlug') as string,
                });
                const data = await planeApiRequest.call(this, method, route);
                const results = data.results as IDataObject[];

                return results.map(item => ({
                    name: item.name as string,
                    value: item.id as string,
                }));
            },

            async getModules(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
                const [method, route] = constructRoute(Resource.MODULE, DefaultOperations.LIST, {
                    workspaceSlug: this.getCurrentNodeParameter('workspaceSlug') as string,
                    projectId: this.getCurrentNodeParameter('projectId') as string,
                });
                const data = await planeApiRequest.call(this, method, route);
                const results = data.results as IDataObject[];

                return results.map(item => ({
                    name: item.name as string,
                    value: item.id as string,
                }));
            },

            async getCycles(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
                const [method, route] = constructRoute(Resource.CYCLE, DefaultOperations.LIST, {
                    workspaceSlug: this.getCurrentNodeParameter('workspaceSlug') as string,
                    projectId: this.getCurrentNodeParameter('projectId') as string,
                });
                const data = await planeApiRequest.call(this, method, route);
                const results = data.results as IDataObject[];

                return results.map(item => ({
                    name: item.name as string,
                    value: item.id as string,
                }));
            }
        }
    }



    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];

        const resource = this.getNodeParameter('resource', 0) as Resource;
        const operation = this.getNodeParameter('operation', 0) as AnyOperation;

        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
                const item = items[itemIndex];
                if (!item) continue;

                const parameters: Record<string, string> = {
                    workspaceSlug: this.getNodeParameter('workspaceSlug', itemIndex) as string,
                };

                if (ParameterUtils.shouldIncludeProjectId(resource, operation))
                    parameters.projectId = this.getNodeParameter('projectId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeStateId(resource, operation))
                    parameters.stateId = this.getNodeParameter('stateId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeLabelId(resource, operation))
                    parameters.labelId = this.getNodeParameter('labelId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeLinkId(resource, operation))
                    parameters.linkId = this.getNodeParameter('linkId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeIssueId(resource, operation))
                    parameters.issueId = this.getNodeParameter('issueId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeActivityId(resource, operation))
                    parameters.activityId = this.getNodeParameter('activityId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeCommentId(resource, operation))
                    parameters.commentId = this.getNodeParameter('commentId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeIssueTypeId(resource, operation))
                    parameters.issueTypeId = this.getNodeParameter('issueTypeId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeIssuePropertyId(resource, operation))
                    parameters.issuePropertyId = this.getNodeParameter('issuePropertyId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeOptionId(resource, operation))
                    parameters.optionId = this.getNodeParameter('optionId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeModuleId(resource, operation))
                    parameters.moduleId = this.getNodeParameter('moduleId', itemIndex) as string;

                if (ParameterUtils.shouldIncludeCycleId(resource, operation))
                    parameters.cycleId = this.getNodeParameter('cycleId', itemIndex) as string;

                const [method, route] = constructRoute(resource, operation, parameters);

const parametersToKeyValue = async (
					accumulator: { [key: string]: any },
					cur: { name: string; value: string; parameterType?: string; inputDataFieldName?: string },
				) => {
					accumulator[cur.name] = cur.value;
					return accumulator;
				};

                const body = this.getNodeParameter('payload.parameters', itemIndex, []) as [{name: string; value: string;}];
                const parsedBody = await prepareRequestBody(body, 'json', 4, parametersToKeyValue) as IDataObject;

                let responseData = await planeApiRequest.call(this, method, route, parsedBody);

                returnData.push(
                    ...this.helpers.constructExecutionMetaData(
                        this.helpers.returnJsonArray(responseData as IDataObject[]),
                        {
                            itemData: { item: itemIndex },
                        }
                    )
                )
            } catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message } });
                    continue;
                }
                throw error;
            }
        }

        return [returnData];
    }
}