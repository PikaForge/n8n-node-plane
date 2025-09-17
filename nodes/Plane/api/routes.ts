import { AnyOperation, DefaultOperations, IssueOperations, MembersOperations, WorklogsOperations } from "../types/operation";
import { Resource } from "../types/resource";

enum Method {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type API_ROUTES = typeof API_ROUTES;

type RouteDefinition = [Method, string];
type OperationRoutes = Partial<Record<AnyOperation, RouteDefinition>>;
type APIRoutes = Partial<Record<Resource, OperationRoutes>>;

export const API_ROUTES: APIRoutes = {
    [Resource.PROJECT]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}'],
    },
    [Resource.STATE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/states'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/states'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/states/{{ stateId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/states/{{ stateId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/states/{{ stateId }}'],
    },
    [Resource.LABEL]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/labels'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/labels'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/labels/{{ labelId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/labels/{{ labelId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/labels/{{ labelId }}'],
    },
    [Resource.LINK]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/links'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/links'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/links/{{ linkId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/links/{{ linkId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/links/{{ linkId }}'],
    },
    [Resource.ISSUE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues'],
        [IssueOperations.GET_BY_UUID]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}'],
        [IssueOperations.GET_BY_SEQUENCE_ID]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueSequenceId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}'],
    },
    [Resource.ISSUE_ACTIVITY]: {
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/activities'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/activities/{{ activityId }}'],
    },
    [Resource.ISSUE_COMMENT]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/comments'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/comments'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/comments/{{ commentId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/comments/{{ commentId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/comments/{{ commentId }}'],
    },
    [Resource.ISSUE_TYPE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}'],
    },
    [Resource.ISSUE_PROPERTIES]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties/{{ issuePropertyId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties/{{ issuePropertyId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties/{{ issuePropertyId }}'],
    },
    [Resource.ISSUE_PROPERTY_OPTIONS]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options/{{ optionId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options/{{ optionId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options/{{ optionId }}'],
    },
    [Resource.ISSUE_PROPERTY_VALUES]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/issue-properties/{{ issuePropertyId }}/values'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/issue-properties/{{ issuePropertyId }}/values'],
    },
    [Resource.ISSUE_ATTACHMENTS]: {
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/attachments'],
    },
    [Resource.MODULE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules/{{ moduleId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules/{{ moduleId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules/{{ moduleId }}'],
    },
    [Resource.MODULE_ISSUE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules/{{ moduleId }}/module-issues'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules/{{ moduleId }}/module-issues'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/modules/{{ moduleId }}/module-issues/{{ issueId }}'],
    },
    [Resource.CYCLE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles/{{ cycleId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles/{{ cycleId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles/{{ cycleId }}'],
    },
    [Resource.CYCLE_ISSUE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles/{{ cycleId }}/cycle-issues'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles/{{ cycleId }}/cycle-issues'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/cycles/{{ cycleId }}/cycle-issues/{{ issueId }}'],
    },
    [Resource.INTAKE_ISSUE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/intake-issues'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/intake-issues'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/intake-issues/{{ issueId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/intake-issues/{{ issueId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/intake-issues/{{ issueId }}'],
    },
    [Resource.WORKLOGS]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/worklogs'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/worklogs'],
        [WorklogsOperations.GET_TOTAL]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/total-worklogs'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/worklogs/{{ worklogId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}/worklogs/{{ worklogId }}'],
    },
    [Resource.MEMBERS]: {
        [MembersOperations.LIST_WORKSPACE]: [Method.GET, '/workspaces/{{ workspaceSlug }}/members'],
        [MembersOperations.LIST_PROJECT]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/members'],
    },
} as const;

export function constructRoute<T extends Resource, R extends AnyOperation>(resource: T, operation: R, parameters: Record<string, string>): [Method, string] {
    const resourceRoutes = API_ROUTES[resource];
    if (!resourceRoutes)
        throw new Error(`No routes found for resource: ${resource}`);

    const route = resourceRoutes[operation];
    if (!route) {
        throw new Error(`No route found for resource: ${resource} and operation: ${String(operation)}`);
    }

    const [method, _url] = route as [Method, string];
    let url = _url;

    // Find all placeholders in the URL (e.g., {{ key }})
    const placeholderRegex = /{{\s*([\w]+)\s*}}/g;
    const missingParams: string[] = [];
    url = url.replace(placeholderRegex, (match, key) => {
        if (parameters[key] === undefined) {
            missingParams.push(key);
            return match;
        }
        return encodeURIComponent(parameters[key]);
    });

    if (missingParams.length > 0) {
        const errorMsg = `Missing required parameter(s) for route ${resource}:${String(operation)}: ${missingParams.join(', ')}. Available parameters: ${Object.keys(parameters).join(', ')}`;
        throw new Error(errorMsg);
    }
    return [method, url];
}