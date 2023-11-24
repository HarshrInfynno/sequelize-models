var DataTypes = require("sequelize").DataTypes;
var _CMPId = require("./CmpId");
var _TEMP_account_contact_detail = require("./TempAccountContactDetail");
var _TEMP_account_info_detail = require("./TempAccountInfoDetail");
var _TEMP_tbl_account_agency_data_detail = require("./TempTblAccountAgencyDataDetail");
var _TEMP_tbl_account_data_detail = require("./TempTblAccountDataDetail");
var _TEMP_tbl_account_data_details_46 = require("./TempTblAccountDataDetails46");
var _TEMP_tbl_agency_data_detail = require("./TempTblAgencyDataDetail");
var _TEMP_tbl_contact_data_detail = require("./TempTblContactDataDetail");
var _TEMP_tbl_sys_tax_service_level_list = require("./TempTblSysTaxServiceLevelList");
var _account_agency = require("./AccountAgency");
var _account_agency_e_service_login_credential = require("./AccountAgencyEServiceLoginCredential");
var _account_agency_id_info = require("./AccountAgencyIdInfo");
var _account_agency_rate = require("./AccountAgencyRate");
var _account_alert_note = require("./AccountAlertNote");
var _account_call_account_contact_info = require("./AccountCallAccountContactInfo");
var _account_communication = require("./AccountCommunication");
var _account_contact_group_linking = require("./AccountContactGroupLinking");
var _account_contact_info = require("./AccountContactInfo");
var _account_contact_note = require("./AccountContactNote");
var _account_info = require("./AccountInfo");
var _account_location_list = require("./AccountLocationList");
var _account_note = require("./AccountNote");
var _account_reg_contact = require("./AccountRegContact");
var _account_usage_type = require("./AccountUsageType");
var _accounts_data_connectPay = require("./AccountsDataConnectPay");
var _accounts_data_connectPay_accountid = require("./AccountsDataConnectPayAccountid");
var _accounts_data_connectPay_datum = require("./AccountsDataConnectPayDatum");
var _accounts_data_connectPay_name = require("./AccountsDataConnectPayName");
var _activity_log = require("./ActivityLog");
var _activity_logs_old = require("./ActivityLogsOld");
var _agency_city = require("./AgencyCity");
var _agency_city_address = require("./AgencyCityAddress");
var _agency_city_contact = require("./AgencyCityContact");
var _agency_city_contact_note = require("./AgencyCityContactNote");
var _agency_city_link = require("./AgencyCityLink");
var _agency_city_note = require("./AgencyCityNote");
var _agency_country = require("./AgencyCountry");
var _agency_department = require("./AgencyDepartment");
var _agency_department_address = require("./AgencyDepartmentAddress");
var _agency_department_contact = require("./AgencyDepartmentContact");
var _agency_department_contact_note = require("./AgencyDepartmentContactNote");
var _agency_department_link = require("./AgencyDepartmentLink");
var _agency_department_note = require("./AgencyDepartmentNote");
var _agency_department_vendor = require("./AgencyDepartmentVendor");
var _agency_deposit_frequency_list = require("./AgencyDepositFrequencyList");
var _agency_filing_type = require("./AgencyFilingType");
var _agency_form_keyword_type = require("./AgencyFormKeywordType");
var _agency_form_number_attribute = require("./AgencyFormNumberAttribute");
var _agency_form_number_note = require("./AgencyFormNumberNote");
var _agency_form_number_rule = require("./AgencyFormNumberRule");
var _agency_form_number = require("./AgencyFormNumber");
var _agency_id_co_detail = require("./AgencyIdCoDetail");
var _agency_id_info = require("./AgencyIdInfo");
var _agency_id_type = require("./AgencyIdType");
var _agency_info = require("./AgencyInfo");
var _agency_link_type = require("./AgencyLinkType");
var _agency_local = require("./AgencyLocal");
var _agency_local_address = require("./AgencyLocalAddress");
var _agency_local_collector = require("./AgencyLocalCollector");
var _agency_local_collector_address = require("./AgencyLocalCollectorAddress");
var _agency_local_collector_contact = require("./AgencyLocalCollectorContact");
var _agency_local_collector_contact_note = require("./AgencyLocalCollectorContactNote");
var _agency_local_collector_link = require("./AgencyLocalCollectorLink");
var _agency_local_collector_note = require("./AgencyLocalCollectorNote");
var _agency_local_contact = require("./AgencyLocalContact");
var _agency_local_contact_note = require("./AgencyLocalContactNote");
var _agency_local_link = require("./AgencyLocalLink");
var _agency_local_note = require("./AgencyLocalNote");
var _agency_rate = require("./AgencyRate");
var _agency_state = require("./AgencyState");
var _agency_tax_form = require("./AgencyTaxForm");
var _agency_tax_forms_co_setting = require("./AgencyTaxFormsCoSetting");
var _agency_tax_type = require("./AgencyTaxType");
var _agency_tax_type = require("./AgencyTaxType");
var _ants_date = require("./AntsDate");
var _app_avatar = require("./AppAvatar");
var _app_document = require("./AppDocument");
var _app_industry = require("./AppIndustry");
var _app_report = require("./AppReport");
var _app_usage_type = require("./AppUsageType");
var _app_user_agency_id = require("./AppUserAgencyId");
var _app_user_agency_info = require("./AppUserAgencyInfo");
var _app_user_failed_login_attempt = require("./AppUserFailedLoginAttempt");
var _app_user_info = require("./AppUserInfo");
var _app_user_property = require("./AppUserProperty");
var _app_user_session = require("./AppUserSession");
var _app_user_view = require("./AppUserView");
var _co_agency_filing_type = require("./CoAgencyFilingType");
var _co_agency_tax_type = require("./CoAgencyTaxType");
var _co_alert = require("./CoAlert");
var _co_billing = require("./CoBilling");
var _co_email = require("./CoEmail");
var _co_hidden_workflow = require("./CoHiddenWorkflow");
var _co_info = require("./CoInfo");
var _co_letter = require("./CoLetter");
var _co_letters_auto = require("./CoLettersAuto");
var _co_ocr_sync_setting = require("./CoOcrSyncSetting");
var _co_wf_assignment_rule = require("./CoWfAssignmentRule");
var _co_wf_options_cc = require("./CoWfOptionsCc");
var _co_wf_options_letter = require("./CoWfOptionsLetter");
var _data_capture_notice_note = require("./DataCaptureNoticeNote");
var _data_capture_review_note = require("./DataCaptureReviewNote");
var _data_import_chunk = require("./DataImportChunk");
var _data_import_log = require("./DataImportLog");
var _failed_job = require("./FailedJob");
var _import_log = require("./ImportLog");
var _linked_wf_note = require("./LinkedWfNote");
var _mail_alert = require("./MailAlert");
var _managed_service_notes_setting = require("./ManagedServiceNotesSetting");
var _mastertax_import_log = require("./MastertaxImportLog");
var _mastertax_setting = require("./MastertaxSetting");
var _microsoft_setting = require("./MicrosoftSetting");
var _migration = require("./Migration");
var _oauth_access_token = require("./OauthAccessToken");
var _oauth_auth_code = require("./OauthAuthCode");
var _oauth_client = require("./OauthClient");
var _oauth_personal_access_client = require("./OauthPersonalAccessClient");
var _oauth_refresh_token = require("./OauthRefreshToken");
var _ocr_archived_document = require("./OcrArchivedDocument");
var _ocr_multiple_tax_period = require("./OcrMultipleTaxPeriod");
var _ocr_scanned_document = require("./OcrScannedDocument");
var _poa_info = require("./PoaInfo");
var _security_password_reset = require("./SecurityPasswordReset");
var _security_role = require("./SecurityRole");
var _security_user_activation = require("./SecurityUserActivation");
var _sys_csr_list = require("./SysCsrList");
var _sys_difficulty_level = require("./SysDifficultyLevel");
var _sys_guidance_agency_insight = require("./SysGuidanceAgencyInsight");
var _sys_guidance_info = require("./SysGuidanceInfo");
var _sys_guidance_letter = require("./SysGuidanceLetter");
var _sys_guidance_note = require("./SysGuidanceNote");
var _sys_guidance_relevant_tax_auth = require("./SysGuidanceRelevantTaxAuth");
var _sys_guidance_summary = require("./SysGuidanceSummary");
var _sys_letter = require("./SysLetter");
var _sys_letters_email_property = require("./SysLettersEmailProperty");
var _sys_letters_merge_field = require("./SysLettersMergeField");
var _sys_priority_list = require("./SysPriorityList");
var _sys_reg_contact = require("./SysRegContact");
var _sys_task_definition = require("./SysTaskDefinition");
var _sys_tax_service_level_list = require("./SysTaxServiceLevelList");
var _sys_user_group_list = require("./SysUserGroupList");
var _sys_wf_assignment_rule_type = require("./SysWfAssignmentRuleType");
var _sys_workflow = require("./SysWorkflow");
var _sys_workflow_task = require("./SysWorkflowTask");
var _sys_workflow_type = require("./SysWorkflowType");
var _temp_account_agency = require("./TempAccountAgency");
var _temp_account_contact_info = require("./TempAccountContactInfo");
var _temp_account_info = require("./TempAccountInfo");
var _token = require("./Token");
var _user_agency_filing_type = require("./UserAgencyFilingType");
var _user_agency_tax_type = require("./UserAgencyTaxType");
var _wf_alert = require("./WfAlert");
var _wf_bulk_notice = require("./WfBulkNotice");
var _wf_communication = require("./WfCommunication");
var _wf_info = require("./WfInfo");
var _wf_info_new = require("./WfInfoNew");
var _wf_linking = require("./WfLinking");
var _wf_multiple_tax_period = require("./WfMultipleTaxPeriod");
var _wf_note = require("./WfNote");
var _wf_round_robin_assignment = require("./WfRoundRobinAssignment");
var _wf_task_abatement = require("./WfTaskAbatement");
var _wf_task_agency_follow_up = require("./WfTaskAgencyFollowUp");
var _wf_task_amount_due = require("./WfTaskAmountDue");
var _wf_task_closure = require("./WfTaskClosure");
var _wf_task_contact = require("./WfTaskContact");
var _wf_task_deposit_refund = require("./WfTaskDepositRefund");
var _wf_task_detail = require("./WfTaskDetail");
var _wf_task_detail_ar = require("./WfTaskDetailAr");
var _wf_task_detail_reg = require("./WfTaskDetailReg");
var _wf_task_guidance = require("./WfTaskGuidance");
var _wf_task_info = require("./WfTaskInfo");
var _wf_task_moved_payment_info = require("./WfTaskMovedPaymentInfo");
var _wf_task_rate = require("./WfTaskRate");
var _wf_task_refund_due = require("./WfTaskRefundDue");
var _wf_task_research = require("./WfTaskResearch");
var _wf_task_round_robin_assignment = require("./WfTaskRoundRobinAssignment");
var _workflow_list = require("./WorkflowList");
var _yardi_setting = require("./YardiSetting");
var _zendesk_setting = require("./ZendeskSetting");

function initModels(sequelize) {
  var CMPId = _CMPId(sequelize, DataTypes);
  var TEMP_account_contact_detail = _TEMP_account_contact_detail(sequelize, DataTypes);
  var TEMP_account_info_detail = _TEMP_account_info_detail(sequelize, DataTypes);
  var TEMP_tbl_account_agency_data_detail = _TEMP_tbl_account_agency_data_detail(sequelize, DataTypes);
  var TEMP_tbl_account_data_detail = _TEMP_tbl_account_data_detail(sequelize, DataTypes);
  var TEMP_tbl_account_data_details_46 = _TEMP_tbl_account_data_details_46(sequelize, DataTypes);
  var TEMP_tbl_agency_data_detail = _TEMP_tbl_agency_data_detail(sequelize, DataTypes);
  var TEMP_tbl_contact_data_detail = _TEMP_tbl_contact_data_detail(sequelize, DataTypes);
  var TEMP_tbl_sys_tax_service_level_list = _TEMP_tbl_sys_tax_service_level_list(sequelize, DataTypes);
  var account_agency = _account_agency(sequelize, DataTypes);
  var account_agency_e_service_login_credential = _account_agency_e_service_login_credential(sequelize, DataTypes);
  var account_agency_id_info = _account_agency_id_info(sequelize, DataTypes);
  var account_agency_rate = _account_agency_rate(sequelize, DataTypes);
  var account_alert_note = _account_alert_note(sequelize, DataTypes);
  var account_call_account_contact_info = _account_call_account_contact_info(sequelize, DataTypes);
  var account_communication = _account_communication(sequelize, DataTypes);
  var account_contact_group_linking = _account_contact_group_linking(sequelize, DataTypes);
  var account_contact_info = _account_contact_info(sequelize, DataTypes);
  var account_contact_note = _account_contact_note(sequelize, DataTypes);
  var account_info = _account_info(sequelize, DataTypes);
  var account_location_list = _account_location_list(sequelize, DataTypes);
  var account_note = _account_note(sequelize, DataTypes);
  var account_reg_contact = _account_reg_contact(sequelize, DataTypes);
  var account_usage_type = _account_usage_type(sequelize, DataTypes);
  var accounts_data_connectPay = _accounts_data_connectPay(sequelize, DataTypes);
  var accounts_data_connectPay_accountid = _accounts_data_connectPay_accountid(sequelize, DataTypes);
  var accounts_data_connectPay_datum = _accounts_data_connectPay_datum(sequelize, DataTypes);
  var accounts_data_connectPay_name = _accounts_data_connectPay_name(sequelize, DataTypes);
  var activity_log = _activity_log(sequelize, DataTypes);
  var activity_logs_old = _activity_logs_old(sequelize, DataTypes);
  var agency_city = _agency_city(sequelize, DataTypes);
  var agency_city_address = _agency_city_address(sequelize, DataTypes);
  var agency_city_contact = _agency_city_contact(sequelize, DataTypes);
  var agency_city_contact_note = _agency_city_contact_note(sequelize, DataTypes);
  var agency_city_link = _agency_city_link(sequelize, DataTypes);
  var agency_city_note = _agency_city_note(sequelize, DataTypes);
  var agency_country = _agency_country(sequelize, DataTypes);
  var agency_department = _agency_department(sequelize, DataTypes);
  var agency_department_address = _agency_department_address(sequelize, DataTypes);
  var agency_department_contact = _agency_department_contact(sequelize, DataTypes);
  var agency_department_contact_note = _agency_department_contact_note(sequelize, DataTypes);
  var agency_department_link = _agency_department_link(sequelize, DataTypes);
  var agency_department_note = _agency_department_note(sequelize, DataTypes);
  var agency_department_vendor = _agency_department_vendor(sequelize, DataTypes);
  var agency_deposit_frequency_list = _agency_deposit_frequency_list(sequelize, DataTypes);
  var agency_filing_type = _agency_filing_type(sequelize, DataTypes);
  var agency_form_keyword_type = _agency_form_keyword_type(sequelize, DataTypes);
  var agency_form_number_attribute = _agency_form_number_attribute(sequelize, DataTypes);
  var agency_form_number_note = _agency_form_number_note(sequelize, DataTypes);
  var agency_form_number_rule = _agency_form_number_rule(sequelize, DataTypes);
  var agency_form_number = _agency_form_number(sequelize, DataTypes);
  var agency_id_co_detail = _agency_id_co_detail(sequelize, DataTypes);
  var agency_id_info = _agency_id_info(sequelize, DataTypes);
  var agency_id_type = _agency_id_type(sequelize, DataTypes);
  var agency_info = _agency_info(sequelize, DataTypes);
  var agency_link_type = _agency_link_type(sequelize, DataTypes);
  var agency_local = _agency_local(sequelize, DataTypes);
  var agency_local_address = _agency_local_address(sequelize, DataTypes);
  var agency_local_collector = _agency_local_collector(sequelize, DataTypes);
  var agency_local_collector_address = _agency_local_collector_address(sequelize, DataTypes);
  var agency_local_collector_contact = _agency_local_collector_contact(sequelize, DataTypes);
  var agency_local_collector_contact_note = _agency_local_collector_contact_note(sequelize, DataTypes);
  var agency_local_collector_link = _agency_local_collector_link(sequelize, DataTypes);
  var agency_local_collector_note = _agency_local_collector_note(sequelize, DataTypes);
  var agency_local_contact = _agency_local_contact(sequelize, DataTypes);
  var agency_local_contact_note = _agency_local_contact_note(sequelize, DataTypes);
  var agency_local_link = _agency_local_link(sequelize, DataTypes);
  var agency_local_note = _agency_local_note(sequelize, DataTypes);
  var agency_rate = _agency_rate(sequelize, DataTypes);
  var agency_state = _agency_state(sequelize, DataTypes);
  var agency_tax_form = _agency_tax_form(sequelize, DataTypes);
  var agency_tax_forms_co_setting = _agency_tax_forms_co_setting(sequelize, DataTypes);
  var agency_tax_type = _agency_tax_type(sequelize, DataTypes);
  var agency_tax_type = _agency_tax_type(sequelize, DataTypes);
  var ants_date = _ants_date(sequelize, DataTypes);
  var app_avatar = _app_avatar(sequelize, DataTypes);
  var app_document = _app_document(sequelize, DataTypes);
  var app_industry = _app_industry(sequelize, DataTypes);
  var app_report = _app_report(sequelize, DataTypes);
  var app_usage_type = _app_usage_type(sequelize, DataTypes);
  var app_user_agency_id = _app_user_agency_id(sequelize, DataTypes);
  var app_user_agency_info = _app_user_agency_info(sequelize, DataTypes);
  var app_user_failed_login_attempt = _app_user_failed_login_attempt(sequelize, DataTypes);
  var app_user_info = _app_user_info(sequelize, DataTypes);
  var app_user_property = _app_user_property(sequelize, DataTypes);
  var app_user_session = _app_user_session(sequelize, DataTypes);
  var app_user_view = _app_user_view(sequelize, DataTypes);
  var co_agency_filing_type = _co_agency_filing_type(sequelize, DataTypes);
  var co_agency_tax_type = _co_agency_tax_type(sequelize, DataTypes);
  var co_alert = _co_alert(sequelize, DataTypes);
  var co_billing = _co_billing(sequelize, DataTypes);
  var co_email = _co_email(sequelize, DataTypes);
  var co_hidden_workflow = _co_hidden_workflow(sequelize, DataTypes);
  var co_info = _co_info(sequelize, DataTypes);
  var co_letter = _co_letter(sequelize, DataTypes);
  var co_letters_auto = _co_letters_auto(sequelize, DataTypes);
  var co_ocr_sync_setting = _co_ocr_sync_setting(sequelize, DataTypes);
  var co_wf_assignment_rule = _co_wf_assignment_rule(sequelize, DataTypes);
  var co_wf_options_cc = _co_wf_options_cc(sequelize, DataTypes);
  var co_wf_options_letter = _co_wf_options_letter(sequelize, DataTypes);
  var data_capture_notice_note = _data_capture_notice_note(sequelize, DataTypes);
  var data_capture_review_note = _data_capture_review_note(sequelize, DataTypes);
  var data_import_chunk = _data_import_chunk(sequelize, DataTypes);
  var data_import_log = _data_import_log(sequelize, DataTypes);
  var failed_job = _failed_job(sequelize, DataTypes);
  var import_log = _import_log(sequelize, DataTypes);
  var linked_wf_note = _linked_wf_note(sequelize, DataTypes);
  var mail_alert = _mail_alert(sequelize, DataTypes);
  var managed_service_notes_setting = _managed_service_notes_setting(sequelize, DataTypes);
  var mastertax_import_log = _mastertax_import_log(sequelize, DataTypes);
  var mastertax_setting = _mastertax_setting(sequelize, DataTypes);
  var microsoft_setting = _microsoft_setting(sequelize, DataTypes);
  var migration = _migration(sequelize, DataTypes);
  var oauth_access_token = _oauth_access_token(sequelize, DataTypes);
  var oauth_auth_code = _oauth_auth_code(sequelize, DataTypes);
  var oauth_client = _oauth_client(sequelize, DataTypes);
  var oauth_personal_access_client = _oauth_personal_access_client(sequelize, DataTypes);
  var oauth_refresh_token = _oauth_refresh_token(sequelize, DataTypes);
  var ocr_archived_document = _ocr_archived_document(sequelize, DataTypes);
  var ocr_multiple_tax_period = _ocr_multiple_tax_period(sequelize, DataTypes);
  var ocr_scanned_document = _ocr_scanned_document(sequelize, DataTypes);
  var poa_info = _poa_info(sequelize, DataTypes);
  var security_password_reset = _security_password_reset(sequelize, DataTypes);
  var security_role = _security_role(sequelize, DataTypes);
  var security_user_activation = _security_user_activation(sequelize, DataTypes);
  var sys_csr_list = _sys_csr_list(sequelize, DataTypes);
  var sys_difficulty_level = _sys_difficulty_level(sequelize, DataTypes);
  var sys_guidance_agency_insight = _sys_guidance_agency_insight(sequelize, DataTypes);
  var sys_guidance_info = _sys_guidance_info(sequelize, DataTypes);
  var sys_guidance_letter = _sys_guidance_letter(sequelize, DataTypes);
  var sys_guidance_note = _sys_guidance_note(sequelize, DataTypes);
  var sys_guidance_relevant_tax_auth = _sys_guidance_relevant_tax_auth(sequelize, DataTypes);
  var sys_guidance_summary = _sys_guidance_summary(sequelize, DataTypes);
  var sys_letter = _sys_letter(sequelize, DataTypes);
  var sys_letters_email_property = _sys_letters_email_property(sequelize, DataTypes);
  var sys_letters_merge_field = _sys_letters_merge_field(sequelize, DataTypes);
  var sys_priority_list = _sys_priority_list(sequelize, DataTypes);
  var sys_reg_contact = _sys_reg_contact(sequelize, DataTypes);
  var sys_task_definition = _sys_task_definition(sequelize, DataTypes);
  var sys_tax_service_level_list = _sys_tax_service_level_list(sequelize, DataTypes);
  var sys_user_group_list = _sys_user_group_list(sequelize, DataTypes);
  var sys_wf_assignment_rule_type = _sys_wf_assignment_rule_type(sequelize, DataTypes);
  var sys_workflow = _sys_workflow(sequelize, DataTypes);
  var sys_workflow_task = _sys_workflow_task(sequelize, DataTypes);
  var sys_workflow_type = _sys_workflow_type(sequelize, DataTypes);
  var temp_account_agency = _temp_account_agency(sequelize, DataTypes);
  var temp_account_contact_info = _temp_account_contact_info(sequelize, DataTypes);
  var temp_account_info = _temp_account_info(sequelize, DataTypes);
  var token = _token(sequelize, DataTypes);
  var user_agency_filing_type = _user_agency_filing_type(sequelize, DataTypes);
  var user_agency_tax_type = _user_agency_tax_type(sequelize, DataTypes);
  var wf_alert = _wf_alert(sequelize, DataTypes);
  var wf_bulk_notice = _wf_bulk_notice(sequelize, DataTypes);
  var wf_communication = _wf_communication(sequelize, DataTypes);
  var wf_info = _wf_info(sequelize, DataTypes);
  var wf_info_new = _wf_info_new(sequelize, DataTypes);
  var wf_linking = _wf_linking(sequelize, DataTypes);
  var wf_multiple_tax_period = _wf_multiple_tax_period(sequelize, DataTypes);
  var wf_note = _wf_note(sequelize, DataTypes);
  var wf_round_robin_assignment = _wf_round_robin_assignment(sequelize, DataTypes);
  var wf_task_abatement = _wf_task_abatement(sequelize, DataTypes);
  var wf_task_agency_follow_up = _wf_task_agency_follow_up(sequelize, DataTypes);
  var wf_task_amount_due = _wf_task_amount_due(sequelize, DataTypes);
  var wf_task_closure = _wf_task_closure(sequelize, DataTypes);
  var wf_task_contact = _wf_task_contact(sequelize, DataTypes);
  var wf_task_deposit_refund = _wf_task_deposit_refund(sequelize, DataTypes);
  var wf_task_detail = _wf_task_detail(sequelize, DataTypes);
  var wf_task_detail_ar = _wf_task_detail_ar(sequelize, DataTypes);
  var wf_task_detail_reg = _wf_task_detail_reg(sequelize, DataTypes);
  var wf_task_guidance = _wf_task_guidance(sequelize, DataTypes);
  var wf_task_info = _wf_task_info(sequelize, DataTypes);
  var wf_task_moved_payment_info = _wf_task_moved_payment_info(sequelize, DataTypes);
  var wf_task_rate = _wf_task_rate(sequelize, DataTypes);
  var wf_task_refund_due = _wf_task_refund_due(sequelize, DataTypes);
  var wf_task_research = _wf_task_research(sequelize, DataTypes);
  var wf_task_round_robin_assignment = _wf_task_round_robin_assignment(sequelize, DataTypes);
  var workflow_list = _workflow_list(sequelize, DataTypes);
  var yardi_setting = _yardi_setting(sequelize, DataTypes);
  var zendesk_setting = _zendesk_setting(sequelize, DataTypes);

  account_contact_info.belongsToMany(workflow_list, { as: 'workflow_list_id_workflow_lists', through: account_contact_group_linking, foreignKey: "account_contact_info_id", otherKey: "workflow_list_id" });
  account_info.belongsToMany(wf_info, { as: 'wf_info_id_wf_infos', through: wf_bulk_notice, foreignKey: "account_info_id", otherKey: "wf_info_id" });
  wf_info.belongsToMany(account_info, { as: 'account_info_id_account_infos', through: wf_bulk_notice, foreignKey: "wf_info_id", otherKey: "account_info_id" });
  workflow_list.belongsToMany(account_contact_info, { as: 'account_contact_info_id_account_contact_infos', through: account_contact_group_linking, foreignKey: "workflow_list_id", otherKey: "account_contact_info_id" });
  ocr_archived_document.belongsTo(account_agency, { as: "account_agency", foreignKey: "account_agency_id"});
  account_agency.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "account_agency_id"});
  ocr_scanned_document.belongsTo(account_agency, { as: "account_agency", foreignKey: "account_agency_id"});
  account_agency.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "account_agency_id"});
  wf_info.belongsTo(account_agency, { as: "issuing_agency_account_agency", foreignKey: "issuing_agency"});
  account_agency.hasMany(wf_info, { as: "wf_infos", foreignKey: "issuing_agency"});
  wf_info_new.belongsTo(account_agency, { as: "issuing_agency_account_agency", foreignKey: "issuing_agency"});
  account_agency.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "issuing_agency"});
  account_contact_group_linking.belongsTo(account_contact_info, { as: "account_contact_info", foreignKey: "account_contact_info_id"});
  account_contact_info.hasMany(account_contact_group_linking, { as: "account_contact_group_linkings", foreignKey: "account_contact_info_id"});
  account_contact_note.belongsTo(account_contact_info, { as: "account_contact_info", foreignKey: "account_contact_info_id"});
  account_contact_info.hasMany(account_contact_note, { as: "account_contact_notes", foreignKey: "account_contact_info_id"});
  wf_info.belongsTo(account_contact_info, { as: "poa_recipient_account_contact_info", foreignKey: "poa_recipient"});
  account_contact_info.hasMany(wf_info, { as: "wf_infos", foreignKey: "poa_recipient"});
  wf_info_new.belongsTo(account_contact_info, { as: "poa_recipient_account_contact_info", foreignKey: "poa_recipient"});
  account_contact_info.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "poa_recipient"});
  account_agency.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(account_agency, { as: "account_agencies", foreignKey: "account_info_id"});
  account_call_account_contact_info.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(account_call_account_contact_info, { as: "account_call_account_contact_infos", foreignKey: "account_info_id"});
  account_communication.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(account_communication, { as: "account_communications", foreignKey: "account_info_id"});
  account_contact_info.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(account_contact_info, { as: "account_contact_infos", foreignKey: "account_info_id"});
  account_note.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(account_note, { as: "account_notes", foreignKey: "account_info_id"});
  ocr_archived_document.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "account_info_id"});
  ocr_scanned_document.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "account_info_id"});
  wf_bulk_notice.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(wf_bulk_notice, { as: "wf_bulk_notices", foreignKey: "account_info_id"});
  wf_info.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(wf_info, { as: "wf_infos", foreignKey: "account_info_id"});
  wf_info_new.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id"});
  account_info.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "account_info_id"});
  account_info.belongsTo(account_location_list, { as: "account_location_list", foreignKey: "account_location_list_id"});
  account_location_list.hasMany(account_info, { as: "account_infos", foreignKey: "account_location_list_id"});
  account_agency.belongsTo(agency_city, { as: "agency_city_agency_city", foreignKey: "agency_city"});
  agency_city.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_city"});
  agency_city_address.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id"});
  agency_city.hasMany(agency_city_address, { as: "agency_city_addresses", foreignKey: "agency_city_id"});
  agency_city_contact.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id"});
  agency_city.hasMany(agency_city_contact, { as: "agency_city_contacts", foreignKey: "agency_city_id"});
  agency_city_link.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id"});
  agency_city.hasMany(agency_city_link, { as: "agency_city_links", foreignKey: "agency_city_id"});
  agency_city_note.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id"});
  agency_city.hasMany(agency_city_note, { as: "agency_city_notes", foreignKey: "agency_city_id"});
  ocr_archived_document.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id"});
  agency_city.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_city_id"});
  ocr_scanned_document.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id"});
  agency_city.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_city_id"});
  wf_info.belongsTo(agency_city, { as: "agency_city_agency_city", foreignKey: "agency_city"});
  agency_city.hasMany(wf_info, { as: "wf_infos", foreignKey: "agency_city"});
  wf_info_new.belongsTo(agency_city, { as: "agency_city_agency_city", foreignKey: "agency_city"});
  agency_city.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "agency_city"});
  agency_city_contact.belongsTo(agency_city_address, { as: "address", foreignKey: "address_id"});
  agency_city_address.hasMany(agency_city_contact, { as: "agency_city_contacts", foreignKey: "address_id"});
  agency_city_contact_note.belongsTo(agency_city_contact, { as: "agency_city_contact", foreignKey: "agency_city_contact_id"});
  agency_city_contact.hasMany(agency_city_contact_note, { as: "agency_city_contact_notes", foreignKey: "agency_city_contact_id"});
  account_info.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country"});
  agency_country.hasMany(account_info, { as: "account_infos", foreignKey: "country"});
  agency_info.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country"});
  agency_country.hasMany(agency_info, { as: "agency_infos", foreignKey: "country"});
  agency_state.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country"});
  agency_country.hasMany(agency_state, { as: "agency_states", foreignKey: "country"});
  co_info.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country"});
  agency_country.hasMany(co_info, { as: "co_infos", foreignKey: "country"});
  ocr_archived_document.belongsTo(agency_country, { as: "agency_country", foreignKey: "agency_countries_id"});
  agency_country.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_countries_id"});
  ocr_scanned_document.belongsTo(agency_country, { as: "agency_country", foreignKey: "agency_countries_id"});
  agency_country.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_countries_id"});
  agency_department_address.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id"});
  agency_department.hasMany(agency_department_address, { as: "agency_department_addresses", foreignKey: "agency_department_id"});
  agency_department_contact.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id"});
  agency_department.hasMany(agency_department_contact, { as: "agency_department_contacts", foreignKey: "agency_department_id"});
  agency_department_link.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id"});
  agency_department.hasMany(agency_department_link, { as: "agency_department_links", foreignKey: "agency_department_id"});
  agency_department_note.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id"});
  agency_department.hasMany(agency_department_note, { as: "agency_department_notes", foreignKey: "agency_department_id"});
  ocr_archived_document.belongsTo(agency_department, { as: "agency_dept", foreignKey: "agency_dept_id"});
  agency_department.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_dept_id"});
  ocr_scanned_document.belongsTo(agency_department, { as: "agency_dept", foreignKey: "agency_dept_id"});
  agency_department.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_dept_id"});
  wf_info.belongsTo(agency_department, { as: "agency_dept_agency_department", foreignKey: "agency_dept"});
  agency_department.hasMany(wf_info, { as: "wf_infos", foreignKey: "agency_dept"});
  wf_info_new.belongsTo(agency_department, { as: "agency_dept_agency_department", foreignKey: "agency_dept"});
  agency_department.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "agency_dept"});
  agency_department_contact.belongsTo(agency_department_address, { as: "address", foreignKey: "address_id"});
  agency_department_address.hasMany(agency_department_contact, { as: "agency_department_contacts", foreignKey: "address_id"});
  agency_department_contact_note.belongsTo(agency_department_contact, { as: "agency_department_contact", foreignKey: "agency_department_contact_id"});
  agency_department_contact.hasMany(agency_department_contact_note, { as: "agency_department_contact_notes", foreignKey: "agency_department_contact_id"});
  account_agency.belongsTo(agency_deposit_frequency_list, { as: "agency_deposit_frequency_list", foreignKey: "agency_deposit_frequency_list_id"});
  agency_deposit_frequency_list.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_deposit_frequency_list_id"});
  agency_form_number_attribute.belongsTo(agency_form_keyword_type, { as: "agency_form_keyword_type", foreignKey: "agency_form_keyword_type_id"});
  agency_form_keyword_type.hasMany(agency_form_number_attribute, { as: "agency_form_number_attributes", foreignKey: "agency_form_keyword_type_id"});
  agency_form_number_rule.belongsTo(agency_form_number_attribute, { as: "agency_form_number_attribute", foreignKey: "agency_form_number_attribute_id"});
  agency_form_number_attribute.hasMany(agency_form_number_rule, { as: "agency_form_number_rules", foreignKey: "agency_form_number_attribute_id"});
  agency_form_number_attribute.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id"});
  agency_form_number.hasMany(agency_form_number_attribute, { as: "agency_form_number_attributes", foreignKey: "agency_form_number_id"});
  agency_form_number_note.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id"});
  agency_form_number.hasMany(agency_form_number_note, { as: "agency_form_number_notes", foreignKey: "agency_form_number_id"});
  ocr_archived_document.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id"});
  agency_form_number.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_form_number_id"});
  ocr_scanned_document.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id"});
  agency_form_number.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_form_number_id"});
  agency_id_co_detail.belongsTo(agency_id_info, { as: "agency_id_info", foreignKey: "agency_id_info_id"});
  agency_id_info.hasMany(agency_id_co_detail, { as: "agency_id_co_details", foreignKey: "agency_id_info_id"});
  account_agency.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_info_id"});
  agency_city.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(agency_city, { as: "agency_cities", foreignKey: "agency_info_id"});
  agency_department.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(agency_department, { as: "agency_departments", foreignKey: "agency_info_id"});
  agency_form_number.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(agency_form_number, { as: "agency_form_numbers", foreignKey: "agency_info_id"});
  agency_id_info.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(agency_id_info, { as: "agency_id_infos", foreignKey: "agency_info_id"});
  agency_local.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(agency_local, { as: "agency_locals", foreignKey: "agency_info_id"});
  agency_tax_form.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(agency_tax_form, { as: "agency_tax_forms", foreignKey: "agency_info_id"});
  app_user_agency_info.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(app_user_agency_info, { as: "app_user_agency_infos", foreignKey: "agency_info_id"});
  ocr_archived_document.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_info_id"});
  ocr_scanned_document.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id"});
  agency_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_info_id"});
  agency_city_link.belongsTo(agency_link_type, { as: "agency_link_type", foreignKey: "agency_link_type_id"});
  agency_link_type.hasMany(agency_city_link, { as: "agency_city_links", foreignKey: "agency_link_type_id"});
  agency_department_link.belongsTo(agency_link_type, { as: "agency_link_type", foreignKey: "agency_link_type_id"});
  agency_link_type.hasMany(agency_department_link, { as: "agency_department_links", foreignKey: "agency_link_type_id"});
  agency_local_link.belongsTo(agency_link_type, { as: "agency_link_type", foreignKey: "agency_link_type_id"});
  agency_link_type.hasMany(agency_local_link, { as: "agency_local_links", foreignKey: "agency_link_type_id"});
  account_agency.belongsTo(agency_local, { as: "agency_local_agency_local", foreignKey: "agency_local"});
  agency_local.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_local"});
  agency_local_address.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id"});
  agency_local.hasMany(agency_local_address, { as: "agency_local_addresses", foreignKey: "agency_local_id"});
  agency_local_contact.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id"});
  agency_local.hasMany(agency_local_contact, { as: "agency_local_contacts", foreignKey: "agency_local_id"});
  agency_local_link.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id"});
  agency_local.hasMany(agency_local_link, { as: "agency_local_links", foreignKey: "agency_local_id"});
  agency_local_note.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id"});
  agency_local.hasMany(agency_local_note, { as: "agency_local_notes", foreignKey: "agency_local_id"});
  ocr_archived_document.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id"});
  agency_local.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_local_id"});
  ocr_scanned_document.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id"});
  agency_local.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_local_id"});
  wf_info.belongsTo(agency_local, { as: "agency_local_agency_local", foreignKey: "agency_local"});
  agency_local.hasMany(wf_info, { as: "wf_infos", foreignKey: "agency_local"});
  wf_info_new.belongsTo(agency_local, { as: "agency_local_agency_local", foreignKey: "agency_local"});
  agency_local.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "agency_local"});
  agency_local_contact.belongsTo(agency_local_address, { as: "address", foreignKey: "address_id"});
  agency_local_address.hasMany(agency_local_contact, { as: "agency_local_contacts", foreignKey: "address_id"});
  agency_city.belongsTo(agency_local_collector, { as: "tax_collector", foreignKey: "tax_collector_id"});
  agency_local_collector.hasMany(agency_city, { as: "agency_cities", foreignKey: "tax_collector_id"});
  agency_local.belongsTo(agency_local_collector, { as: "tax_collector", foreignKey: "tax_collector_id"});
  agency_local_collector.hasMany(agency_local, { as: "agency_locals", foreignKey: "tax_collector_id"});
  agency_local_collector_address.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id"});
  agency_local_collector.hasMany(agency_local_collector_address, { as: "agency_local_collector_addresses", foreignKey: "agency_local_collector_id"});
  agency_local_collector_contact.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id"});
  agency_local_collector.hasMany(agency_local_collector_contact, { as: "agency_local_collector_contacts", foreignKey: "agency_local_collector_id"});
  agency_local_collector_link.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id"});
  agency_local_collector.hasMany(agency_local_collector_link, { as: "agency_local_collector_links", foreignKey: "agency_local_collector_id"});
  agency_local_collector_note.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id"});
  agency_local_collector.hasMany(agency_local_collector_note, { as: "agency_local_collector_notes", foreignKey: "agency_local_collector_id"});
  agency_local_collector_contact.belongsTo(agency_local_collector_address, { as: "address", foreignKey: "address_id"});
  agency_local_collector_address.hasMany(agency_local_collector_contact, { as: "agency_local_collector_contacts", foreignKey: "address_id"});
  agency_local_collector_contact_note.belongsTo(agency_local_collector_contact, { as: "agency_local_collector_contact", foreignKey: "agency_local_collector_contact_id"});
  agency_local_collector_contact.hasMany(agency_local_collector_contact_note, { as: "agency_local_collector_contact_notes", foreignKey: "agency_local_collector_contact_id"});
  agency_local_contact_note.belongsTo(agency_local_contact, { as: "agency_local_contact", foreignKey: "agency_local_contact_id"});
  agency_local_contact.hasMany(agency_local_contact_note, { as: "agency_local_contact_notes", foreignKey: "agency_local_contact_id"});
  wf_info.belongsTo(agency_tax_form, { as: "poa_form_agency_tax_form", foreignKey: "poa_form"});
  agency_tax_form.hasMany(wf_info, { as: "wf_infos", foreignKey: "poa_form"});
  wf_info_new.belongsTo(agency_tax_form, { as: "poa_form_agency_tax_form", foreignKey: "poa_form"});
  agency_tax_form.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "poa_form"});
  co_info.belongsTo(app_industry, { as: "industry_app_industry", foreignKey: "industry"});
  app_industry.hasMany(co_info, { as: "co_infos", foreignKey: "industry"});
  account_usage_type.belongsTo(app_usage_type, { as: "app_usage_type", foreignKey: "app_usage_type_id"});
  app_usage_type.hasMany(account_usage_type, { as: "account_usage_types", foreignKey: "app_usage_type_id"});
  account_agency.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(account_agency, { as: "account_agencies", foreignKey: "created_by"});
  account_agency.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(account_agency, { as: "updated_by_account_agencies", foreignKey: "updated_by"});
  account_contact_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(account_contact_info, { as: "account_contact_infos", foreignKey: "created_by"});
  account_contact_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(account_contact_info, { as: "updated_by_account_contact_infos", foreignKey: "updated_by"});
  account_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(account_contact_note, { as: "account_contact_notes", foreignKey: "created_by"});
  account_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(account_contact_note, { as: "updated_by_account_contact_notes", foreignKey: "updated_by"});
  account_info.belongsTo(app_user_info, { as: "assignment_2_app_user_info", foreignKey: "assignment_2"});
  app_user_info.hasMany(account_info, { as: "account_infos", foreignKey: "assignment_2"});
  account_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(account_info, { as: "created_by_account_infos", foreignKey: "created_by"});
  account_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(account_info, { as: "updated_by_account_infos", foreignKey: "updated_by"});
  agency_city.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_city, { as: "agency_cities", foreignKey: "created_by"});
  agency_city.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_city, { as: "updated_by_agency_cities", foreignKey: "updated_by"});
  agency_city_address.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_city_address, { as: "agency_city_addresses", foreignKey: "created_by"});
  agency_city_address.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_city_address, { as: "updated_by_agency_city_addresses", foreignKey: "updated_by"});
  agency_city_contact.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_city_contact, { as: "agency_city_contacts", foreignKey: "created_by"});
  agency_city_contact.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_city_contact, { as: "updated_by_agency_city_contacts", foreignKey: "updated_by"});
  agency_city_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_city_contact_note, { as: "agency_city_contact_notes", foreignKey: "created_by"});
  agency_city_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_city_contact_note, { as: "updated_by_agency_city_contact_notes", foreignKey: "updated_by"});
  agency_city_link.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_city_link, { as: "agency_city_links", foreignKey: "created_by"});
  agency_city_link.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_city_link, { as: "updated_by_agency_city_links", foreignKey: "updated_by"});
  agency_city_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_city_note, { as: "agency_city_notes", foreignKey: "created_by"});
  agency_city_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_city_note, { as: "updated_by_agency_city_notes", foreignKey: "updated_by"});
  agency_department.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_department, { as: "agency_departments", foreignKey: "created_by"});
  agency_department.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_department, { as: "updated_by_agency_departments", foreignKey: "updated_by"});
  agency_department_address.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_department_address, { as: "agency_department_addresses", foreignKey: "created_by"});
  agency_department_address.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_department_address, { as: "updated_by_agency_department_addresses", foreignKey: "updated_by"});
  agency_department_contact.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_department_contact, { as: "agency_department_contacts", foreignKey: "created_by"});
  agency_department_contact.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_department_contact, { as: "updated_by_agency_department_contacts", foreignKey: "updated_by"});
  agency_department_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_department_contact_note, { as: "agency_department_contact_notes", foreignKey: "created_by"});
  agency_department_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_department_contact_note, { as: "updated_by_agency_department_contact_notes", foreignKey: "updated_by"});
  agency_department_link.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_department_link, { as: "agency_department_links", foreignKey: "created_by"});
  agency_department_link.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_department_link, { as: "updated_by_agency_department_links", foreignKey: "updated_by"});
  agency_department_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_department_note, { as: "agency_department_notes", foreignKey: "created_by"});
  agency_department_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_department_note, { as: "updated_by_agency_department_notes", foreignKey: "updated_by"});
  agency_local.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_local, { as: "agency_locals", foreignKey: "created_by"});
  agency_local.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_local, { as: "updated_by_agency_locals", foreignKey: "updated_by"});
  agency_local_address.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_local_address, { as: "agency_local_addresses", foreignKey: "created_by"});
  agency_local_address.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_local_address, { as: "updated_by_agency_local_addresses", foreignKey: "updated_by"});
  agency_local_collector_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_local_collector_contact_note, { as: "agency_local_collector_contact_notes", foreignKey: "created_by"});
  agency_local_collector_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_local_collector_contact_note, { as: "updated_by_agency_local_collector_contact_notes", foreignKey: "updated_by"});
  agency_local_contact.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_local_contact, { as: "agency_local_contacts", foreignKey: "created_by"});
  agency_local_contact.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_local_contact, { as: "updated_by_agency_local_contacts", foreignKey: "updated_by"});
  agency_local_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_local_contact_note, { as: "agency_local_contact_notes", foreignKey: "created_by"});
  agency_local_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_local_contact_note, { as: "updated_by_agency_local_contact_notes", foreignKey: "updated_by"});
  agency_local_link.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_local_link, { as: "agency_local_links", foreignKey: "created_by"});
  agency_local_link.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_local_link, { as: "updated_by_agency_local_links", foreignKey: "updated_by"});
  agency_local_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(agency_local_note, { as: "agency_local_notes", foreignKey: "created_by"});
  agency_local_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(agency_local_note, { as: "updated_by_agency_local_notes", foreignKey: "updated_by"});
  app_user_agency_info.belongsTo(app_user_info, { as: "app_user_info", foreignKey: "app_user_info_id"});
  app_user_info.hasMany(app_user_agency_info, { as: "app_user_agency_infos", foreignKey: "app_user_info_id"});
  app_user_agency_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(app_user_agency_info, { as: "created_by_app_user_agency_infos", foreignKey: "created_by"});
  app_user_agency_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(app_user_agency_info, { as: "updated_by_app_user_agency_infos", foreignKey: "updated_by"});
  app_user_view.belongsTo(app_user_info, { as: "user", foreignKey: "user_id"});
  app_user_info.hasMany(app_user_view, { as: "app_user_views", foreignKey: "user_id"});
  ocr_archived_document.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "created_by"});
  ocr_scanned_document.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "created_by"});
  wf_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(wf_info, { as: "wf_infos", foreignKey: "created_by"});
  wf_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(wf_info, { as: "updated_by_wf_infos", foreignKey: "updated_by"});
  wf_info_new.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by"});
  app_user_info.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "updated_by"});
  wf_info_new.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by"});
  app_user_info.hasMany(wf_info_new, { as: "created_by_wf_info_news", foreignKey: "created_by"});
  wf_task_detail_ar.belongsTo(app_user_info, { as: "ar_review_by_app_user_info", foreignKey: "ar_review_by"});
  app_user_info.hasMany(wf_task_detail_ar, { as: "wf_task_detail_ars", foreignKey: "ar_review_by"});
  wf_task_info.belongsTo(app_user_info, { as: "assigned_to_app_user_info", foreignKey: "assigned_to"});
  app_user_info.hasMany(wf_task_info, { as: "wf_task_infos", foreignKey: "assigned_to"});
  account_info.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(account_info, { as: "account_infos", foreignKey: "co_info_id"});
  account_location_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(account_location_list, { as: "account_location_lists", foreignKey: "co_info_id"});
  account_note.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(account_note, { as: "account_notes", foreignKey: "co_info_id"});
  account_usage_type.belongsTo(co_info, { as: "co", foreignKey: "co_id"});
  co_info.hasMany(account_usage_type, { as: "account_usage_types", foreignKey: "co_id"});
  agency_city.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_city, { as: "agency_cities", foreignKey: "co_info_id"});
  agency_department.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_department, { as: "agency_departments", foreignKey: "co_info_id"});
  agency_deposit_frequency_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_deposit_frequency_list, { as: "agency_deposit_frequency_lists", foreignKey: "co_info_id"});
  agency_form_number_rule.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_form_number_rule, { as: "agency_form_number_rules", foreignKey: "co_info_id"});
  agency_form_number.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_form_number, { as: "agency_form_numbers", foreignKey: "co_info_id"});
  agency_id_co_detail.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_id_co_detail, { as: "agency_id_co_details", foreignKey: "co_info_id"});
  agency_local.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_local, { as: "agency_locals", foreignKey: "co_info_id"});
  agency_tax_form.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_tax_form, { as: "agency_tax_forms", foreignKey: "co_info_id"});
  agency_tax_type.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(agency_tax_type, { as: "agency_tax_types", foreignKey: "co_info_id"});
  app_user_agency_info.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(app_user_agency_info, { as: "app_user_agency_infos", foreignKey: "co_info_id"});
  app_user_info.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(app_user_info, { as: "app_user_infos", foreignKey: "co_info_id"});
  co_billing.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(co_billing, { as: "co_billings", foreignKey: "co_info_id"});
  managed_service_notes_setting.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(managed_service_notes_setting, { as: "managed_service_notes_settings", foreignKey: "co_info_id"});
  mastertax_setting.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(mastertax_setting, { as: "mastertax_settings", foreignKey: "co_info_id"});
  ocr_archived_document.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "co_info_id"});
  ocr_scanned_document.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "co_info_id"});
  sys_csr_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(sys_csr_list, { as: "sys_csr_lists", foreignKey: "co_info_id"});
  sys_priority_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(sys_priority_list, { as: "sys_priority_lists", foreignKey: "co_info_id"});
  sys_tax_service_level_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(sys_tax_service_level_list, { as: "sys_tax_service_level_lists", foreignKey: "co_info_id"});
  sys_user_group_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(sys_user_group_list, { as: "sys_user_group_lists", foreignKey: "co_info_id"});
  sys_workflow.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "co_info_id"});
  wf_task_amount_due.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(wf_task_amount_due, { as: "wf_task_amount_dues", foreignKey: "co_info_id"});
  wf_task_closure.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(wf_task_closure, { as: "wf_task_closures", foreignKey: "co_info_id"});
  wf_task_contact.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(wf_task_contact, { as: "wf_task_contacts", foreignKey: "co_info_id"});
  wf_task_detail.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(wf_task_detail, { as: "wf_task_details", foreignKey: "co_info_id"});
  wf_task_detail_ar.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(wf_task_detail_ar, { as: "wf_task_detail_ars", foreignKey: "co_info_id"});
  wf_task_detail_reg.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(wf_task_detail_reg, { as: "wf_task_detail_regs", foreignKey: "co_info_id"});
  wf_task_refund_due.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(wf_task_refund_due, { as: "wf_task_refund_dues", foreignKey: "co_info_id"});
  workflow_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(workflow_list, { as: "workflow_lists", foreignKey: "co_info_id"});
  zendesk_setting.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id"});
  co_info.hasMany(zendesk_setting, { as: "zendesk_settings", foreignKey: "co_info_id"});
  data_import_chunk.belongsTo(data_import_log, { as: "data_import_log", foreignKey: "data_import_logs_id"});
  data_import_log.hasMany(data_import_chunk, { as: "data_import_chunks", foreignKey: "data_import_logs_id"});
  account_info.belongsTo(sys_csr_list, { as: "sys_csr_list", foreignKey: "sys_csr_list_id"});
  sys_csr_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_csr_list_id"});
  sys_workflow.belongsTo(sys_difficulty_level, { as: "sys_difficulty_level", foreignKey: "sys_difficulty_level_id"});
  sys_difficulty_level.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "sys_difficulty_level_id"});
  account_info.belongsTo(sys_priority_list, { as: "sys_priority_list", foreignKey: "sys_priority_list_id"});
  sys_priority_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_priority_list_id"});
  sys_workflow.belongsTo(sys_priority_list, { as: "sys_priority_list", foreignKey: "sys_priority_list_id"});
  sys_priority_list.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "sys_priority_list_id"});
  sys_workflow_task.belongsTo(sys_task_definition, { as: "sys_task_definition", foreignKey: "sys_task_definition_id"});
  sys_task_definition.hasMany(sys_workflow_task, { as: "sys_workflow_tasks", foreignKey: "sys_task_definition_id"});
  wf_task_info.belongsTo(sys_task_definition, { as: "sys_task_definition", foreignKey: "sys_task_definition_id"});
  sys_task_definition.hasMany(wf_task_info, { as: "wf_task_infos", foreignKey: "sys_task_definition_id"});
  account_info.belongsTo(sys_tax_service_level_list, { as: "sys_tax_service_level_list", foreignKey: "sys_tax_service_level_list_id"});
  sys_tax_service_level_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_tax_service_level_list_id"});
  account_info.belongsTo(sys_user_group_list, { as: "sys_user_group_list", foreignKey: "sys_user_group_list_id"});
  sys_user_group_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_user_group_list_id"});
  agency_form_number.belongsTo(sys_workflow, { as: "notice_type_sys_workflow", foreignKey: "notice_type"});
  sys_workflow.hasMany(agency_form_number, { as: "agency_form_numbers", foreignKey: "notice_type"});
  ocr_archived_document.belongsTo(sys_workflow, { as: "notice_type", foreignKey: "notice_type_id"});
  sys_workflow.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "notice_type_id"});
  ocr_scanned_document.belongsTo(sys_workflow, { as: "notice_type", foreignKey: "notice_type_id"});
  sys_workflow.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "notice_type_id"});
  sys_workflow_task.belongsTo(sys_workflow, { as: "sys_workflow", foreignKey: "sys_workflow_id"});
  sys_workflow.hasMany(sys_workflow_task, { as: "sys_workflow_tasks", foreignKey: "sys_workflow_id"});
  wf_info.belongsTo(sys_workflow, { as: "notice_type_sys_workflow", foreignKey: "notice_type"});
  sys_workflow.hasMany(wf_info, { as: "wf_infos", foreignKey: "notice_type"});
  wf_info_new.belongsTo(sys_workflow, { as: "notice_type_sys_workflow", foreignKey: "notice_type"});
  sys_workflow.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "notice_type"});
  sys_workflow.belongsTo(sys_workflow_type, { as: "sys_workflow_type", foreignKey: "sys_workflow_type_id"});
  sys_workflow_type.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "sys_workflow_type_id"});
  wf_bulk_notice.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_bulk_notice, { as: "wf_bulk_notices", foreignKey: "wf_info_id"});
  wf_multiple_tax_period.belongsTo(wf_info, { as: "workflow_notice_info", foreignKey: "workflow_notice_info_id"});
  wf_info.hasMany(wf_multiple_tax_period, { as: "wf_multiple_tax_periods", foreignKey: "workflow_notice_info_id"});
  wf_note.belongsTo(wf_info, { as: "workflow_info", foreignKey: "workflow_info_id"});
  wf_info.hasMany(wf_note, { as: "wf_notes", foreignKey: "workflow_info_id"});
  wf_task_abatement.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_abatement, { as: "wf_task_abatements", foreignKey: "wf_info_id"});
  wf_task_amount_due.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_amount_due, { as: "wf_task_amount_dues", foreignKey: "wf_info_id"});
  wf_task_closure.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_closure, { as: "wf_task_closures", foreignKey: "wf_info_id"});
  wf_task_contact.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_contact, { as: "wf_task_contacts", foreignKey: "wf_info_id"});
  wf_task_deposit_refund.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_deposit_refund, { as: "wf_task_deposit_refunds", foreignKey: "wf_info_id"});
  wf_task_detail.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_detail, { as: "wf_task_details", foreignKey: "wf_info_id"});
  wf_task_detail_ar.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_detail_ar, { as: "wf_task_detail_ars", foreignKey: "wf_info_id"});
  wf_task_detail_reg.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_detail_reg, { as: "wf_task_detail_regs", foreignKey: "wf_info_id"});
  wf_task_guidance.belongsTo(wf_info, { as: "workflow_info", foreignKey: "workflow_info_id"});
  wf_info.hasMany(wf_task_guidance, { as: "wf_task_guidances", foreignKey: "workflow_info_id"});
  wf_task_moved_payment_info.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_moved_payment_info, { as: "wf_task_moved_payment_infos", foreignKey: "wf_info_id"});
  wf_task_rate.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_rate, { as: "wf_task_rates", foreignKey: "wf_info_id"});
  wf_task_refund_due.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_refund_due, { as: "wf_task_refund_dues", foreignKey: "wf_info_id"});
  wf_task_research.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id"});
  wf_info.hasMany(wf_task_research, { as: "wf_task_researches", foreignKey: "wf_info_id"});
  wf_task_guidance.belongsTo(wf_note, { as: "wf_note", foreignKey: "wf_notes_id"});
  wf_note.hasMany(wf_task_guidance, { as: "wf_task_guidances", foreignKey: "wf_notes_id"});
  wf_task_guidance.belongsTo(wf_task_info, { as: "workflow_task_info", foreignKey: "workflow_task_info_id"});
  wf_task_info.hasMany(wf_task_guidance, { as: "wf_task_guidances", foreignKey: "workflow_task_info_id"});
  account_contact_group_linking.belongsTo(workflow_list, { as: "workflow_list", foreignKey: "workflow_list_id"});
  workflow_list.hasMany(account_contact_group_linking, { as: "account_contact_group_linkings", foreignKey: "workflow_list_id"});

  return {
    CMPId,
    TEMP_account_contact_detail,
    TEMP_account_info_detail,
    TEMP_tbl_account_agency_data_detail,
    TEMP_tbl_account_data_detail,
    TEMP_tbl_account_data_details_46,
    TEMP_tbl_agency_data_detail,
    TEMP_tbl_contact_data_detail,
    TEMP_tbl_sys_tax_service_level_list,
    account_agency,
    account_agency_e_service_login_credential,
    account_agency_id_info,
    account_agency_rate,
    account_alert_note,
    account_call_account_contact_info,
    account_communication,
    account_contact_group_linking,
    account_contact_info,
    account_contact_note,
    account_info,
    account_location_list,
    account_note,
    account_reg_contact,
    account_usage_type,
    accounts_data_connectPay,
    accounts_data_connectPay_accountid,
    accounts_data_connectPay_datum,
    accounts_data_connectPay_name,
    activity_log,
    activity_logs_old,
    agency_city,
    agency_city_address,
    agency_city_contact,
    agency_city_contact_note,
    agency_city_link,
    agency_city_note,
    agency_country,
    agency_department,
    agency_department_address,
    agency_department_contact,
    agency_department_contact_note,
    agency_department_link,
    agency_department_note,
    agency_department_vendor,
    agency_deposit_frequency_list,
    agency_filing_type,
    agency_form_keyword_type,
    agency_form_number_attribute,
    agency_form_number_note,
    agency_form_number_rule,
    agency_form_number,
    agency_id_co_detail,
    agency_id_info,
    agency_id_type,
    agency_info,
    agency_link_type,
    agency_local,
    agency_local_address,
    agency_local_collector,
    agency_local_collector_address,
    agency_local_collector_contact,
    agency_local_collector_contact_note,
    agency_local_collector_link,
    agency_local_collector_note,
    agency_local_contact,
    agency_local_contact_note,
    agency_local_link,
    agency_local_note,
    agency_rate,
    agency_state,
    agency_tax_form,
    agency_tax_forms_co_setting,
    agency_tax_type,
    agency_tax_type,
    ants_date,
    app_avatar,
    app_document,
    app_industry,
    app_report,
    app_usage_type,
    app_user_agency_id,
    app_user_agency_info,
    app_user_failed_login_attempt,
    app_user_info,
    app_user_property,
    app_user_session,
    app_user_view,
    co_agency_filing_type,
    co_agency_tax_type,
    co_alert,
    co_billing,
    co_email,
    co_hidden_workflow,
    co_info,
    co_letter,
    co_letters_auto,
    co_ocr_sync_setting,
    co_wf_assignment_rule,
    co_wf_options_cc,
    co_wf_options_letter,
    data_capture_notice_note,
    data_capture_review_note,
    data_import_chunk,
    data_import_log,
    failed_job,
    import_log,
    linked_wf_note,
    mail_alert,
    managed_service_notes_setting,
    mastertax_import_log,
    mastertax_setting,
    microsoft_setting,
    migration,
    oauth_access_token,
    oauth_auth_code,
    oauth_client,
    oauth_personal_access_client,
    oauth_refresh_token,
    ocr_archived_document,
    ocr_multiple_tax_period,
    ocr_scanned_document,
    poa_info,
    security_password_reset,
    security_role,
    security_user_activation,
    sys_csr_list,
    sys_difficulty_level,
    sys_guidance_agency_insight,
    sys_guidance_info,
    sys_guidance_letter,
    sys_guidance_note,
    sys_guidance_relevant_tax_auth,
    sys_guidance_summary,
    sys_letter,
    sys_letters_email_property,
    sys_letters_merge_field,
    sys_priority_list,
    sys_reg_contact,
    sys_task_definition,
    sys_tax_service_level_list,
    sys_user_group_list,
    sys_wf_assignment_rule_type,
    sys_workflow,
    sys_workflow_task,
    sys_workflow_type,
    temp_account_agency,
    temp_account_contact_info,
    temp_account_info,
    token,
    user_agency_filing_type,
    user_agency_tax_type,
    wf_alert,
    wf_bulk_notice,
    wf_communication,
    wf_info,
    wf_info_new,
    wf_linking,
    wf_multiple_tax_period,
    wf_note,
    wf_round_robin_assignment,
    wf_task_abatement,
    wf_task_agency_follow_up,
    wf_task_amount_due,
    wf_task_closure,
    wf_task_contact,
    wf_task_deposit_refund,
    wf_task_detail,
    wf_task_detail_ar,
    wf_task_detail_reg,
    wf_task_guidance,
    wf_task_info,
    wf_task_moved_payment_info,
    wf_task_rate,
    wf_task_refund_due,
    wf_task_research,
    wf_task_round_robin_assignment,
    workflow_list,
    yardi_setting,
    zendesk_setting,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
