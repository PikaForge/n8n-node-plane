import { AnyOperation, DefaultOperations, IssueOperations, MembersOperations } from "../types/operation"
import { Resource } from "../types/resource"

enum Method {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type API_ROUTES = typeof API_ROUTES;

type RouteDefinition = [Method, string];
type OperationRoutes<T extends Resource, R extends keyof API_ROUTES[T]> = Record<R, RouteDefinition>;
type APIRoutes<T extends Resource, R extends keyof API_ROUTES[T]> = Record<T, OperationRoutes<T, R>>;

export const API_ROUTES: APIRoutes<Resource, AnyOperation> = {
    [Resource.PROJECT]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}'],
    },
    [Resource.STATE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/states'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/states'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/states/{{ stateId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/states/{{ stateId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/states/{{ stateId }}'],
    },
    [Resource.LABEL]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/labels'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/labels'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/labels/{{ labelId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/labels/{{ labelId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/labels/{{ labelId }}'],
    },
    [Resource.LINK]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/links'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/links'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/links/{{ linkId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/links/{{ linkId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/links/{{ linkId }}'],
    },
    [Resource.ISSUE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues'],
        [IssueOperations.GET_BY_UUID]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueUuid }}'],
        [IssueOperations.GET_BY_SEQUENCE_ID]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueSequenceId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issues/{{ issueId }}'],
    },
    [Resource.ISSUE_ACTIVITY]: {
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/activities'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/activities/{{ activityId }}'],
    },
    [Resource.ISSUE_COMMENT]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/comments'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/comments'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/comments/{{ commentId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/comments/{{ commentId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/comments/{{ commentId }}'],
    },
    [Resource.ISSUE_TYPE]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/issue-types'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issue-types'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issue-types/{{ issueTypeId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/issue-types/{{ issueTypeId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/issue-types/{{ issueTypeId }}'],
    },
    [Resource.ISSUE_PROPERTIES]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties/{{ propertyKey }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties/{{ propertyKey }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-types/{{ issueTypeId }}/issue-properties/{{ propertyKey }}'],
    },
    [Resource.ISSUE_PROPERTY_OPTIONS]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options/{{ optionId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options/{{ optionId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/issue-properties/{{ issuePropertyId }}/options/{{ optionId }}'],
    },
    [Resource.ISSUE_PROPERTY_VALUES]: {
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/issue-properties/{{ issuePropertyId }}/values'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/issue-properties/{{ issuePropertyId }}/values'],
    },
    [Resource.ISSUE_ATTACHMENTS]: {
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/attachments'],
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
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/intake-issues'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/intake-issues'],
        [DefaultOperations.GET]: [Method.GET, '/workspaces/{{ workspaceSlug }}/intake-issues/{{ issueId }}'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/intake-issues/{{ issueId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/intake-issues/{{ issueId }}'],
    },
    [Resource.WORKLOGS]: {
        // TOTAL WORKLOGS
        [DefaultOperations.CREATE]: [Method.POST, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/worklogs'],
        [DefaultOperations.LIST]: [Method.GET, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/worklogs'],
        [DefaultOperations.UPDATE]: [Method.PATCH, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/worklogs/{{ worklogId }}'],
        [DefaultOperations.DELETE]: [Method.DELETE, '/workspaces/{{ workspaceSlug }}/issues/{{ issueId }}/worklogs/{{ worklogId }}'],
    },
    [Resource.MEMBERS]: {
        [MembersOperations.LIST_WORKSPACE]: [Method.GET, '/workspaces/{{ workspaceSlug }}/members'],
        [MembersOperations.LIST_PROJECT]: [Method.GET, '/workspaces/{{ workspaceSlug }}/projects/{{ projectId }}/members'],
    },
};

export function constructRoute<T extends Resource, R extends keyof API_ROUTES[T]>(resource: T, operation: R, parameters: Record<string, string>): [Method, string] {
    const resourceRoutes = API_ROUTES[resource];
    if (!resourceRoutes) 
        throw new Error(`No routes found for resource: ${resource}`);
    
    const route = resourceRoutes[operation];
    if (!route) {
        throw new Error(`No route found for resource: ${resource} and operation: ${String(operation)}`);
    }

    const [method, _url] = route as [Method, string];
    let url = _url;
    
    // Replace placeholders in the URL with actual parameters (support both {{key}} and {{ key }})
    for (const [key, value] of Object.entries(parameters)) {
        const regex = new RegExp(`{{\s*${key}\s*}}`, 'g');
        url = url.replace(regex, encodeURIComponent(value));
    }

    return [method, url];
}