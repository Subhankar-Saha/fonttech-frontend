import {
  IContainerMovement,
  IContainerReport,
  IDeviceConfiguration,
  IFreightStationConfiguration,
  IGateIn,
  IGateInOutReport,
  IGateOut,
  ILocateContainer,
  IMachineConfiguration,
  IMachineReport,
  IMachines,
  IOrganizationConfiguration,
  IRoleConfiguration,
  ITask,
  ITrailers,
  IUserConfiguration,
  IYardPlanning,
} from "../authentication/interface/modulePermissions";

export class AllPermissions
  implements
    IGateIn,
    ILocateContainer,
    IContainerMovement,
    ITask,
    IYardPlanning,
    IMachines,
    IGateInOutReport,
    IContainerReport,
    IMachineReport,
    ITrailers,
    IGateOut,
    IOrganizationConfiguration,
    IFreightStationConfiguration,
    IRoleConfiguration,
    IUserConfiguration,
    IMachineConfiguration,
    IDeviceConfiguration
{
  // Gate-In
  canViewGateInEntryList = false;
  canCreateManualGateInEntry = false;
  canEditGateInEntry = false;
  canPerformGateInOperation = false;
  canUploadIgmFile = false;
  canExportGateInEntries = false;

  // Locate Container
  canLocateContainer = false;

  // Container Movement
  canViewContainerMovementList = false;
  canExportContainerMovements = false;

  // Task
  canViewTaskList = false;
  canCreateTask = false;
  canViewTaskMap = false;

  // Yard Planning
  canViewRulesList = false;
  canCreateRule = false;
  canEditRule = false;
  canDeleteRule = false;
  canViewBookingList = false;
  canCreateBooking = false;
  canViewYardPlanningLayout = false;

  // Machines
  canViewMachinesList = false;

  // Gate-In Report
  canViewGateInReportList = false;
  canExportGateInReport = false;
  canViewGateOutReportList = false;
  canExportGateOutReport = false;

  // Container Report
  canViewContainerReportList = false;
  canExportContainerReport = false;

  // Machine Report
  canViewMachineReportList = false;
  canExportMachineReport = false;

  // Trailers
  canAddTrailers = false;
  canEditTrailers = false;
  canDeleteTrailers = false;
  canViewTrailersList = false;

  // Gate-Out
  canViewGateOutEntryList = false;
  canCreateManualGateOutEntry = false;
  canEditGateOutEntry = false;
  canExportGateOutEntries = false;

  // Organization Configuration
  canViewOrganizationList = false;
  canAddOrganization = false;
  canEditOrganization = false;

  // Freight Station Configuration
  canViewYardList = false;
  canAddYard = false;
  canEditYard = false;

  // Role Configuration
  canViewRoleList = false;
  canAddRole = false;
  canEditRole = false;

  // User Configuration
  canViewUserList = false;
  canAddUser = false;
  canEditUser = false;

  // Machine Configuration
  canViewMachineList = false;
  canAddMachine = false;
  canEditMachine = false;

  // Device Configuration
  canViewMobileDevices = false;
  canAddMobileDevice = false;
  canEditMobileDevice = false;
  canViewProcessingUnitDevices = false;
  canAddProcessingUnitDevice = false;
  canEditProcessingUnitDevice = false;
  canViewCameraDevices = false;
  canAddCameraDevice = false;
  canEditCameraDevice = false;
  canViewGPSDevices = false;
  canAddGPSDevice = false;
  canEditGPSDevice = false;
}
