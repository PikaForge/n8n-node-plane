import { INodePropertyOptions } from "n8n-workflow";

export enum Resource {
    PROJECT = 'project',
    STATE = 'state',
    LABEL = 'label',
    LINK = 'link',
    ISSUE = 'issue',
    ISSUE_ACTIVITY = 'issueActivity',
    ISSUE_COMMENT = 'issueComment',
    ISSUE_TYPE = 'issueType',
    ISSUE_PROPERTIES = 'issueProperties',
    ISSUE_PROPERTY_OPTIONS = 'issuePropertyOptions',
    ISSUE_PROPERTY_VALUES = 'issuePropertyValues',
    ISSUE_ATTACHMENTS = 'issueAttachments',
    MODULE = 'module',
    MODULE_ISSUE = 'moduleIssue',
    CYCLE = 'cycle',
    CYCLE_ISSUE = 'cycleIssue',
    INTAKE_ISSUE = 'intakeIssue',
    WORKLOGS = 'worklogs',
    MEMBERS = 'members',
}

export class PlaneResource {
    static readonly PLANE_RESOURCE = Resource;

    static getName(resource: Resource): string {
        switch (resource) {
            case Resource.PROJECT:
                return 'Project';
            case Resource.STATE:
                return 'State';
            case Resource.LABEL:
                return 'Label';
            case Resource.LINK:
                return 'Link';
            case Resource.ISSUE:
                return 'Issue';
            case Resource.ISSUE_ACTIVITY:
                return 'Issue Activity';
            case Resource.ISSUE_COMMENT:
                return 'Issue Comment';
            case Resource.ISSUE_TYPE:
                return 'Issue Type';
            case Resource.ISSUE_PROPERTIES:
                return 'Issue Properties';
            case Resource.ISSUE_PROPERTY_OPTIONS:
                return 'Issue Property Options';
            case Resource.ISSUE_PROPERTY_VALUES:
                return 'Issue Property Values';
            case Resource.ISSUE_ATTACHMENTS:
                return 'Issue Attachments';
            case Resource.MODULE:
                return 'Module';
            case Resource.MODULE_ISSUE:
                return 'Module Issue';
            case Resource.CYCLE:
                return 'Cycle';
            case Resource.CYCLE_ISSUE:
                return 'Cycle Issue';
            case Resource.INTAKE_ISSUE:
                return 'Intake Issue';
            case Resource.WORKLOGS:
                return 'Worklogs';
            case Resource.MEMBERS:
                return 'Members';
            default:
                return 'Unknown';
        }
    }

    static getValue(resource: Resource): string {
        return resource;
    }

    static getPropertyOptions(resource: Resource): INodePropertyOptions {
        return {
            name: this.getName(resource),
            value: this.getValue(resource),
        }
    }
}