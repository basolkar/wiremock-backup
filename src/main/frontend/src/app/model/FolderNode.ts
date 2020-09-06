export interface FolderNode {
    name: string;
    isChecked: boolean;
    ancestorPath: string;
    recordingPath?: string;
    nodeType: FolderNodeTypes;
    children: FolderNode[];
}

export interface TreeAction {
    type: TreeActionTypes;
    node: FolderNode;
}

export enum TreeActionTypes {
    ADD = 'add', REMOVE = 'remove'
}

export enum FolderNodeTypes {
    FOLDER = 'folder', RECORDING = 'recording', TEMP_FOLDER = 'temp_folder', TEMP_RECORDING = 'temp_recording'
}

export interface FlatFolderNode {
    name: string;
    expandable: boolean;
    level: number;
    isExpanded?: boolean;
}
