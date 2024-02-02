export interface IPermissions {
	[index: string]: any;
	gateIn:                      IGateIn;
	locateContainer:             ILocateContainer;
	containerMovement:           IContainerMovement;
	task:                        ITask;
	yardPlanning:                IYardPlanning;
	machines:                    IMachines;
	gateInReport:                IGateInOutReport;
	containerReport:             IContainerReport;
	machineReport:               IMachineReport;
	trailers:                    ITrailers;
	gateOut:                     IGateOut;
	organizationConfiguration:   IOrganizationConfiguration;
	freightStationConfiguration: IFreightStationConfiguration;
	roleConfiguration:           IRoleConfiguration;
	userConfiguration:           IUserConfiguration;
	machineConfiguration:        IMachineConfiguration;
	deviceConfiguration:		 IDeviceConfiguration;
}

export interface IGateIn {
	canViewGateInEntryList:     boolean;
	canCreateManualGateInEntry: boolean;
	canEditGateInEntry:         boolean;
	canPerformGateInOperation:	boolean;
	canUploadIgmFile:           boolean;
	canExportGateInEntries:     boolean;
}

export interface ILocateContainer {
	canLocateContainer: boolean;
}

export interface IContainerMovement {
	canViewContainerMovementList: boolean;
	canExportContainerMovements:  boolean;
}

export interface ITask {
	canViewTaskList: boolean;
	canCreateTask:   boolean;
	canViewTaskMap:  boolean;
}

export interface IYardPlanning {
	canViewRulesList:          boolean;
	canCreateRule:             boolean;
	canEditRule:               boolean;
	canDeleteRule:             boolean;
	canViewBookingList:        boolean;
	canCreateBooking:          boolean;
	canViewYardPlanningLayout: boolean;
}

export interface IMachines {
	canViewMachinesList: boolean;
}

export interface IGateInOutReport {
	canViewGateInReportList:  boolean;
	canExportGateInReport:    boolean;
	canViewGateOutReportList: boolean;
	canExportGateOutReport:   boolean;
}

export interface IContainerReport {
	canViewContainerReportList: boolean;
	canExportContainerReport:   boolean;
}

export interface IMachineReport {
	canViewMachineReportList: boolean;
	canExportMachineReport:   boolean;
}

export interface ITrailers {
	canAddTrailers:      boolean;
	canEditTrailers:     boolean;
	canDeleteTrailers:   boolean;
	canViewTrailersList: boolean;
}

export interface IGateOut {
	canViewGateOutEntryList:     boolean;
	canCreateManualGateOutEntry: boolean;
	canEditGateOutEntry:         boolean;
	canExportGateOutEntries:     boolean;
}

export interface IOrganizationConfiguration {
	canViewOrganizationList: boolean;
	canAddOrganization:      boolean;
	canEditOrganization:     boolean;
}

export interface IFreightStationConfiguration {
	canViewYardList: boolean;
	canAddYard:      boolean;
	canEditYard:     boolean;
}

export interface IRoleConfiguration {
	canViewRoleList: boolean;
	canAddRole:      boolean;
	canEditRole:     boolean;
}

export interface IUserConfiguration {
	canViewUserList: boolean;
	canAddUser:      boolean;
	canEditUser:     boolean;
}

export interface IMachineConfiguration {
	canViewMachineList: boolean;
	canAddMachine:      boolean;
	canEditMachine:     boolean;
}

export interface IDeviceConfiguration {
	canViewMobileDevices: 			boolean;
	canAddMobileDevice: 			boolean;
	canEditMobileDevice: 			boolean;
	canViewProcessingUnitDevices: 	boolean;
	canAddProcessingUnitDevice: 	boolean;
	canEditProcessingUnitDevice: 	boolean;
	canViewCameraDevices: 			boolean;
	canAddCameraDevice: 			boolean;
	canEditCameraDevice: 			boolean;
	canViewGPSDevices: 				boolean;
	canAddGPSDevice: 				boolean;
	canEditGPSDevice: 				boolean;
}

// export interface IConfigurations {
// 	canViewOrganizationList: boolean;
// 	canAddOrganization:      boolean;
// 	canEditOrganization:     boolean;
// 	canViewYardList: 		 boolean;
// 	canAddYard:      		 boolean;
// 	canEditYard:     		 boolean;
// 	canViewRoleList: 		 boolean;
// 	canAddRole:      		 boolean;
// 	canEditRole:     		 boolean;
// 	canViewUserList: 		 boolean;
// 	canAddUser:      		 boolean;
// 	canEditUser:     		 boolean;
// 	canViewMachineList: 		 boolean;
// 	canAddMachine:      		 boolean;
// 	canEditMachine:     		 boolean;
// }
