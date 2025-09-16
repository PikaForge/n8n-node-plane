enum PLANE_NETWORK {
    Secret = 0,
    Public = 2,
}

export interface Project {
    id: string;
    name: string;
    identifier: string;
    description?: string;
    total_members?: number;
    total_cycles?: number;
    total_modules?: number;
    is_member?: boolean;
    member_role?: number;
    is_deployed?: number;
    created_at: string;
    updated_at: string;
    network: PLANE_NETWORK;
    emoji: string;
    icon_prop: Record<string, unknown>;
    module_view: boolean;
    cycle_view: boolean;
    inbox_view: boolean;
    page_view: boolean;
    issue_views_view: boolean;
    cover_image?: string;
    close_in: number;
    created_by: string;
    updated_by: string;
    workspace: string;
    default_assignee?: string;
    project_lead?: string;
    estimate: string;
    default_state?: string;
}