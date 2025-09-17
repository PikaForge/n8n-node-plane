import { AnyOperation, DefaultOperations, IssueOperations, MembersOperations } from "../types/operation";
import { Resource } from "../types/resource";

export class ParameterUtils {
    static shouldIncludeProjectId(resource: Resource, operation: AnyOperation): boolean {
        const isNotProjectOrMembersResource = resource !== Resource.PROJECT && resource !== Resource.MEMBERS;
        const isProjectResourceWithIdOperation = resource === Resource.PROJECT && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        const isProjectMembersListOperation = resource === Resource.MEMBERS && operation === MembersOperations.LIST_PROJECT;

        return isNotProjectOrMembersResource || isProjectResourceWithIdOperation || isProjectMembersListOperation;
    }

    static shouldIncludeStateId(resource: Resource, operation: AnyOperation): boolean {
        const isStateResourceWithIdOperation = resource === Resource.STATE && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        return isStateResourceWithIdOperation;
    }

    static shouldIncludeLabelId(resource: Resource, operation: AnyOperation): boolean {
        const isLabelResourceWithIdOperation = resource === Resource.LABEL && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        return isLabelResourceWithIdOperation;
    }

    static shouldIncludeLinkId(resource: Resource, operation: AnyOperation): boolean {
        const isLinkResourceWithIdOperation = resource === Resource.LINK && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        return isLinkResourceWithIdOperation;
    }

        static shouldIncludeIssueId(resource: Resource, operation: AnyOperation): boolean {
        const isIssueScopedResource = [
            Resource.LINK,
            Resource.ISSUE_ACTIVITY,
            Resource.ISSUE_COMMENT,
            Resource.ISSUE_PROPERTY_VALUES,
            Resource.ISSUE_ATTACHMENTS,
            Resource.WORKLOGS,
        ].includes(resource);

        const isIssueResourceWithIdOperation = resource === Resource.ISSUE && ([IssueOperations.GET_BY_SEQUENCE_ID, IssueOperations.GET_BY_UUID, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        const isIntakeIssueResourceWithIdOperation = resource === Resource.INTAKE_ISSUE && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);

        const isModuleIssueResourceWithIdOperation = resource === Resource.MODULE_ISSUE && ([DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        const isCycleIssueResourceWithIdOperation = resource === Resource.CYCLE_ISSUE && ([DefaultOperations.DELETE] as AnyOperation[]).includes(operation);

        return isIssueScopedResource ||
            isIssueResourceWithIdOperation ||
            isIntakeIssueResourceWithIdOperation ||
            isModuleIssueResourceWithIdOperation ||
            isCycleIssueResourceWithIdOperation;
    }

    static shouldIncludeActivityId(resource: Resource, operation: AnyOperation): boolean {
        const isIssueActivityResourceWithIdOperation = resource === Resource.ISSUE_ACTIVITY && ([DefaultOperations.GET] as AnyOperation[]).includes(operation);
        return isIssueActivityResourceWithIdOperation;
    }

    static shouldIncludeCommentId(resource: Resource, operation: AnyOperation): boolean {
        const isIssueCommentResourceWithIdOperation = resource === Resource.ISSUE_COMMENT && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        return isIssueCommentResourceWithIdOperation;
    }

    static shouldIncludeIssueTypeId(resource: Resource, operation: AnyOperation): boolean {
        const isIssueTypeResourceWithIdOperation = resource === Resource.ISSUE_TYPE && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        return isIssueTypeResourceWithIdOperation;
    }


    static shouldIncludeIssuePropertyId(resource: Resource, operation: AnyOperation): boolean {
        const isIssuePropertyScopedResource = [
            Resource.ISSUE_PROPERTY_OPTIONS,
            Resource.ISSUE_PROPERTY_VALUES
        ].includes(resource);
        const isIssuePropertiesResourceWithIdOperation = resource === Resource.ISSUE_PROPERTIES && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);

        return isIssuePropertyScopedResource || isIssuePropertiesResourceWithIdOperation;

    }

    static shouldIncludeOptionId(resource: Resource, operation: AnyOperation): boolean {
        const isIssuePropertyOptionsResourceWithIdOperation = resource === Resource.ISSUE_PROPERTY_OPTIONS && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);
        return isIssuePropertyOptionsResourceWithIdOperation;
    }

    static shouldIncludeModuleId(resource: Resource, operation: AnyOperation): boolean {
        const isModuleScopedResource = [Resource.MODULE_ISSUE].includes(resource);
        const isModuleResourceWithIdOperation = resource === Resource.MODULE && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);

        return isModuleScopedResource || isModuleResourceWithIdOperation;
    }

    static shouldIncludeCycleId(resource: Resource, operation: AnyOperation): boolean {
        const isCycleScopedResource = [Resource.CYCLE_ISSUE].includes(resource);
        const isCycleResourceWithIdOperation = resource === Resource.CYCLE && ([DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE] as AnyOperation[]).includes(operation);

        return isCycleScopedResource || isCycleResourceWithIdOperation;
    }
}