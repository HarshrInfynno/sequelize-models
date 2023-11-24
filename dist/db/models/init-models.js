"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_form_number_rule = exports.agency_form_number_note = exports.agency_form_number_attribute = exports.agency_form_keyword_type = exports.agency_filing_type = exports.agency_deposit_frequency_list = exports.agency_department_vendor = exports.agency_department_note = exports.agency_department_link = exports.agency_department_contact_note = exports.agency_department_contact = exports.agency_department_address = exports.agency_department = exports.agency_country = exports.agency_city_note = exports.agency_city_link = exports.agency_city_contact_note = exports.agency_city_contact = exports.agency_city_address = exports.agency_city = exports.activity_logs_old = exports.activity_log = exports.accounts_data_connectPay_name = exports.accounts_data_connectPay_datum = exports.accounts_data_connectPay_accountid = exports.accounts_data_connectPay = exports.account_usage_type = exports.account_reg_contact = exports.account_note = exports.account_location_list = exports.account_info = exports.account_contact_note = exports.account_contact_info = exports.account_contact_group_linking = exports.account_communication = exports.account_call_account_contact_info = exports.account_alert_note = exports.account_agency_rate = exports.account_agency_id_info = exports.account_agency_e_service_login_credential = exports.account_agency = exports.TEMP_tbl_sys_tax_service_level_list = exports.TEMP_tbl_contact_data_detail = exports.TEMP_tbl_agency_data_detail = exports.TEMP_tbl_account_data_details_46 = exports.TEMP_tbl_account_data_detail = exports.TEMP_tbl_account_agency_data_detail = exports.TEMP_account_info_detail = exports.TEMP_account_contact_detail = exports.CMPId = void 0;
exports.data_capture_notice_note = exports.co_wf_options_letter = exports.co_wf_options_cc = exports.co_wf_assignment_rule = exports.co_ocr_sync_setting = exports.co_letters_auto = exports.co_letter = exports.co_info = exports.co_hidden_workflow = exports.co_email = exports.co_billing = exports.co_alert = exports.co_agency_tax_type = exports.co_agency_filing_type = exports.app_user_view = exports.app_user_session = exports.app_user_property = exports.app_user_info = exports.app_user_failed_login_attempt = exports.app_user_agency_info = exports.app_user_agency_id = exports.app_usage_type = exports.app_report = exports.app_industry = exports.app_document = exports.app_avatar = exports.ants_date = exports.agency_tax_type = exports.agency_tax_forms_co_setting = exports.agency_tax_form = exports.agency_state = exports.agency_rate = exports.agency_local_note = exports.agency_local_link = exports.agency_local_contact_note = exports.agency_local_contact = exports.agency_local_collector_note = exports.agency_local_collector_link = exports.agency_local_collector_contact_note = exports.agency_local_collector_contact = exports.agency_local_collector_address = exports.agency_local_collector = exports.agency_local_address = exports.agency_local = exports.agency_link_type = exports.agency_info = exports.agency_id_type = exports.agency_id_info = exports.agency_id_co_detail = exports.agency_form_number = void 0;
exports.user_agency_tax_type = exports.user_agency_filing_type = exports.token = exports.temp_account_info = exports.temp_account_contact_info = exports.temp_account_agency = exports.sys_workflow_type = exports.sys_workflow_task = exports.sys_workflow = exports.sys_wf_assignment_rule_type = exports.sys_user_group_list = exports.sys_tax_service_level_list = exports.sys_task_definition = exports.sys_reg_contact = exports.sys_priority_list = exports.sys_letters_merge_field = exports.sys_letters_email_property = exports.sys_letter = exports.sys_guidance_summary = exports.sys_guidance_relevant_tax_auth = exports.sys_guidance_note = exports.sys_guidance_letter = exports.sys_guidance_info = exports.sys_guidance_agency_insight = exports.sys_difficulty_level = exports.sys_csr_list = exports.security_user_activation = exports.security_role = exports.security_password_reset = exports.poa_info = exports.ocr_scanned_document = exports.ocr_multiple_tax_period = exports.ocr_archived_document = exports.oauth_refresh_token = exports.oauth_personal_access_client = exports.oauth_client = exports.oauth_auth_code = exports.oauth_access_token = exports.migration = exports.microsoft_setting = exports.mastertax_setting = exports.mastertax_import_log = exports.managed_service_notes_setting = exports.mail_alert = exports.linked_wf_note = exports.import_log = exports.failed_job = exports.data_import_log = exports.data_import_chunk = exports.data_capture_review_note = void 0;
exports.initModels = exports.zendesk_setting = exports.yardi_setting = exports.workflow_list = exports.wf_task_round_robin_assignment = exports.wf_task_research = exports.wf_task_refund_due = exports.wf_task_rate = exports.wf_task_moved_payment_info = exports.wf_task_info = exports.wf_task_guidance = exports.wf_task_detail_reg = exports.wf_task_detail_ar = exports.wf_task_detail = exports.wf_task_deposit_refund = exports.wf_task_contact = exports.wf_task_closure = exports.wf_task_amount_due = exports.wf_task_agency_follow_up = exports.wf_task_abatement = exports.wf_round_robin_assignment = exports.wf_note = exports.wf_multiple_tax_period = exports.wf_linking = exports.wf_info_new = exports.wf_info = exports.wf_communication = exports.wf_bulk_notice = exports.wf_alert = void 0;
const CmpId_1 = require("./CmpId");
Object.defineProperty(exports, "CMPId", { enumerable: true, get: function () { return CmpId_1.CMPId; } });
const TempAccountContactDetail_1 = require("./TempAccountContactDetail");
Object.defineProperty(exports, "TEMP_account_contact_detail", { enumerable: true, get: function () { return TempAccountContactDetail_1.TEMP_account_contact_detail; } });
const TempAccountInfoDetail_1 = require("./TempAccountInfoDetail");
Object.defineProperty(exports, "TEMP_account_info_detail", { enumerable: true, get: function () { return TempAccountInfoDetail_1.TEMP_account_info_detail; } });
const TempTblAccountAgencyDataDetail_1 = require("./TempTblAccountAgencyDataDetail");
Object.defineProperty(exports, "TEMP_tbl_account_agency_data_detail", { enumerable: true, get: function () { return TempTblAccountAgencyDataDetail_1.TEMP_tbl_account_agency_data_detail; } });
const TempTblAccountDataDetail_1 = require("./TempTblAccountDataDetail");
Object.defineProperty(exports, "TEMP_tbl_account_data_detail", { enumerable: true, get: function () { return TempTblAccountDataDetail_1.TEMP_tbl_account_data_detail; } });
const TempTblAccountDataDetails46_1 = require("./TempTblAccountDataDetails46");
Object.defineProperty(exports, "TEMP_tbl_account_data_details_46", { enumerable: true, get: function () { return TempTblAccountDataDetails46_1.TEMP_tbl_account_data_details_46; } });
const TempTblAgencyDataDetail_1 = require("./TempTblAgencyDataDetail");
Object.defineProperty(exports, "TEMP_tbl_agency_data_detail", { enumerable: true, get: function () { return TempTblAgencyDataDetail_1.TEMP_tbl_agency_data_detail; } });
const TempTblContactDataDetail_1 = require("./TempTblContactDataDetail");
Object.defineProperty(exports, "TEMP_tbl_contact_data_detail", { enumerable: true, get: function () { return TempTblContactDataDetail_1.TEMP_tbl_contact_data_detail; } });
const TempTblSysTaxServiceLevelList_1 = require("./TempTblSysTaxServiceLevelList");
Object.defineProperty(exports, "TEMP_tbl_sys_tax_service_level_list", { enumerable: true, get: function () { return TempTblSysTaxServiceLevelList_1.TEMP_tbl_sys_tax_service_level_list; } });
const AccountAgency_1 = require("./AccountAgency");
Object.defineProperty(exports, "account_agency", { enumerable: true, get: function () { return AccountAgency_1.account_agency; } });
const AccountAgencyEServiceLoginCredential_1 = require("./AccountAgencyEServiceLoginCredential");
Object.defineProperty(exports, "account_agency_e_service_login_credential", { enumerable: true, get: function () { return AccountAgencyEServiceLoginCredential_1.account_agency_e_service_login_credential; } });
const AccountAgencyIdInfo_1 = require("./AccountAgencyIdInfo");
Object.defineProperty(exports, "account_agency_id_info", { enumerable: true, get: function () { return AccountAgencyIdInfo_1.account_agency_id_info; } });
const AccountAgencyRate_1 = require("./AccountAgencyRate");
Object.defineProperty(exports, "account_agency_rate", { enumerable: true, get: function () { return AccountAgencyRate_1.account_agency_rate; } });
const AccountAlertNote_1 = require("./AccountAlertNote");
Object.defineProperty(exports, "account_alert_note", { enumerable: true, get: function () { return AccountAlertNote_1.account_alert_note; } });
const AccountCallAccountContactInfo_1 = require("./AccountCallAccountContactInfo");
Object.defineProperty(exports, "account_call_account_contact_info", { enumerable: true, get: function () { return AccountCallAccountContactInfo_1.account_call_account_contact_info; } });
const AccountCommunication_1 = require("./AccountCommunication");
Object.defineProperty(exports, "account_communication", { enumerable: true, get: function () { return AccountCommunication_1.account_communication; } });
const AccountContactGroupLinking_1 = require("./AccountContactGroupLinking");
Object.defineProperty(exports, "account_contact_group_linking", { enumerable: true, get: function () { return AccountContactGroupLinking_1.account_contact_group_linking; } });
const AccountContactInfo_1 = require("./AccountContactInfo");
Object.defineProperty(exports, "account_contact_info", { enumerable: true, get: function () { return AccountContactInfo_1.account_contact_info; } });
const AccountContactNote_1 = require("./AccountContactNote");
Object.defineProperty(exports, "account_contact_note", { enumerable: true, get: function () { return AccountContactNote_1.account_contact_note; } });
const AccountInfo_1 = require("./AccountInfo");
Object.defineProperty(exports, "account_info", { enumerable: true, get: function () { return AccountInfo_1.account_info; } });
const AccountLocationList_1 = require("./AccountLocationList");
Object.defineProperty(exports, "account_location_list", { enumerable: true, get: function () { return AccountLocationList_1.account_location_list; } });
const AccountNote_1 = require("./AccountNote");
Object.defineProperty(exports, "account_note", { enumerable: true, get: function () { return AccountNote_1.account_note; } });
const AccountRegContact_1 = require("./AccountRegContact");
Object.defineProperty(exports, "account_reg_contact", { enumerable: true, get: function () { return AccountRegContact_1.account_reg_contact; } });
const AccountUsageType_1 = require("./AccountUsageType");
Object.defineProperty(exports, "account_usage_type", { enumerable: true, get: function () { return AccountUsageType_1.account_usage_type; } });
const AccountsDataConnectPay_1 = require("./AccountsDataConnectPay");
Object.defineProperty(exports, "accounts_data_connectPay", { enumerable: true, get: function () { return AccountsDataConnectPay_1.accounts_data_connectPay; } });
const AccountsDataConnectPayAccountid_1 = require("./AccountsDataConnectPayAccountid");
Object.defineProperty(exports, "accounts_data_connectPay_accountid", { enumerable: true, get: function () { return AccountsDataConnectPayAccountid_1.accounts_data_connectPay_accountid; } });
const AccountsDataConnectPayDatum_1 = require("./AccountsDataConnectPayDatum");
Object.defineProperty(exports, "accounts_data_connectPay_datum", { enumerable: true, get: function () { return AccountsDataConnectPayDatum_1.accounts_data_connectPay_datum; } });
const AccountsDataConnectPayName_1 = require("./AccountsDataConnectPayName");
Object.defineProperty(exports, "accounts_data_connectPay_name", { enumerable: true, get: function () { return AccountsDataConnectPayName_1.accounts_data_connectPay_name; } });
const ActivityLog_1 = require("./ActivityLog");
Object.defineProperty(exports, "activity_log", { enumerable: true, get: function () { return ActivityLog_1.activity_log; } });
const ActivityLogsOld_1 = require("./ActivityLogsOld");
Object.defineProperty(exports, "activity_logs_old", { enumerable: true, get: function () { return ActivityLogsOld_1.activity_logs_old; } });
const AgencyCity_1 = require("./AgencyCity");
Object.defineProperty(exports, "agency_city", { enumerable: true, get: function () { return AgencyCity_1.agency_city; } });
const AgencyCityAddress_1 = require("./AgencyCityAddress");
Object.defineProperty(exports, "agency_city_address", { enumerable: true, get: function () { return AgencyCityAddress_1.agency_city_address; } });
const AgencyCityContact_1 = require("./AgencyCityContact");
Object.defineProperty(exports, "agency_city_contact", { enumerable: true, get: function () { return AgencyCityContact_1.agency_city_contact; } });
const AgencyCityContactNote_1 = require("./AgencyCityContactNote");
Object.defineProperty(exports, "agency_city_contact_note", { enumerable: true, get: function () { return AgencyCityContactNote_1.agency_city_contact_note; } });
const AgencyCityLink_1 = require("./AgencyCityLink");
Object.defineProperty(exports, "agency_city_link", { enumerable: true, get: function () { return AgencyCityLink_1.agency_city_link; } });
const AgencyCityNote_1 = require("./AgencyCityNote");
Object.defineProperty(exports, "agency_city_note", { enumerable: true, get: function () { return AgencyCityNote_1.agency_city_note; } });
const AgencyCountry_1 = require("./AgencyCountry");
Object.defineProperty(exports, "agency_country", { enumerable: true, get: function () { return AgencyCountry_1.agency_country; } });
const AgencyDepartment_1 = require("./AgencyDepartment");
Object.defineProperty(exports, "agency_department", { enumerable: true, get: function () { return AgencyDepartment_1.agency_department; } });
const AgencyDepartmentAddress_1 = require("./AgencyDepartmentAddress");
Object.defineProperty(exports, "agency_department_address", { enumerable: true, get: function () { return AgencyDepartmentAddress_1.agency_department_address; } });
const AgencyDepartmentContact_1 = require("./AgencyDepartmentContact");
Object.defineProperty(exports, "agency_department_contact", { enumerable: true, get: function () { return AgencyDepartmentContact_1.agency_department_contact; } });
const AgencyDepartmentContactNote_1 = require("./AgencyDepartmentContactNote");
Object.defineProperty(exports, "agency_department_contact_note", { enumerable: true, get: function () { return AgencyDepartmentContactNote_1.agency_department_contact_note; } });
const AgencyDepartmentLink_1 = require("./AgencyDepartmentLink");
Object.defineProperty(exports, "agency_department_link", { enumerable: true, get: function () { return AgencyDepartmentLink_1.agency_department_link; } });
const AgencyDepartmentNote_1 = require("./AgencyDepartmentNote");
Object.defineProperty(exports, "agency_department_note", { enumerable: true, get: function () { return AgencyDepartmentNote_1.agency_department_note; } });
const AgencyDepartmentVendor_1 = require("./AgencyDepartmentVendor");
Object.defineProperty(exports, "agency_department_vendor", { enumerable: true, get: function () { return AgencyDepartmentVendor_1.agency_department_vendor; } });
const AgencyDepositFrequencyList_1 = require("./AgencyDepositFrequencyList");
Object.defineProperty(exports, "agency_deposit_frequency_list", { enumerable: true, get: function () { return AgencyDepositFrequencyList_1.agency_deposit_frequency_list; } });
const AgencyFilingType_1 = require("./AgencyFilingType");
Object.defineProperty(exports, "agency_filing_type", { enumerable: true, get: function () { return AgencyFilingType_1.agency_filing_type; } });
const AgencyFormKeywordType_1 = require("./AgencyFormKeywordType");
Object.defineProperty(exports, "agency_form_keyword_type", { enumerable: true, get: function () { return AgencyFormKeywordType_1.agency_form_keyword_type; } });
const AgencyFormNumberAttribute_1 = require("./AgencyFormNumberAttribute");
Object.defineProperty(exports, "agency_form_number_attribute", { enumerable: true, get: function () { return AgencyFormNumberAttribute_1.agency_form_number_attribute; } });
const AgencyFormNumberNote_1 = require("./AgencyFormNumberNote");
Object.defineProperty(exports, "agency_form_number_note", { enumerable: true, get: function () { return AgencyFormNumberNote_1.agency_form_number_note; } });
const AgencyFormNumberRule_1 = require("./AgencyFormNumberRule");
Object.defineProperty(exports, "agency_form_number_rule", { enumerable: true, get: function () { return AgencyFormNumberRule_1.agency_form_number_rule; } });
const AgencyFormNumber_1 = require("./AgencyFormNumber");
Object.defineProperty(exports, "agency_form_number", { enumerable: true, get: function () { return AgencyFormNumber_1.agency_form_number; } });
const AgencyIdCoDetail_1 = require("./AgencyIdCoDetail");
Object.defineProperty(exports, "agency_id_co_detail", { enumerable: true, get: function () { return AgencyIdCoDetail_1.agency_id_co_detail; } });
const AgencyIdInfo_1 = require("./AgencyIdInfo");
Object.defineProperty(exports, "agency_id_info", { enumerable: true, get: function () { return AgencyIdInfo_1.agency_id_info; } });
const AgencyIdType_1 = require("./AgencyIdType");
Object.defineProperty(exports, "agency_id_type", { enumerable: true, get: function () { return AgencyIdType_1.agency_id_type; } });
const AgencyInfo_1 = require("./AgencyInfo");
Object.defineProperty(exports, "agency_info", { enumerable: true, get: function () { return AgencyInfo_1.agency_info; } });
const AgencyLinkType_1 = require("./AgencyLinkType");
Object.defineProperty(exports, "agency_link_type", { enumerable: true, get: function () { return AgencyLinkType_1.agency_link_type; } });
const AgencyLocal_1 = require("./AgencyLocal");
Object.defineProperty(exports, "agency_local", { enumerable: true, get: function () { return AgencyLocal_1.agency_local; } });
const AgencyLocalAddress_1 = require("./AgencyLocalAddress");
Object.defineProperty(exports, "agency_local_address", { enumerable: true, get: function () { return AgencyLocalAddress_1.agency_local_address; } });
const AgencyLocalCollector_1 = require("./AgencyLocalCollector");
Object.defineProperty(exports, "agency_local_collector", { enumerable: true, get: function () { return AgencyLocalCollector_1.agency_local_collector; } });
const AgencyLocalCollectorAddress_1 = require("./AgencyLocalCollectorAddress");
Object.defineProperty(exports, "agency_local_collector_address", { enumerable: true, get: function () { return AgencyLocalCollectorAddress_1.agency_local_collector_address; } });
const AgencyLocalCollectorContact_1 = require("./AgencyLocalCollectorContact");
Object.defineProperty(exports, "agency_local_collector_contact", { enumerable: true, get: function () { return AgencyLocalCollectorContact_1.agency_local_collector_contact; } });
const AgencyLocalCollectorContactNote_1 = require("./AgencyLocalCollectorContactNote");
Object.defineProperty(exports, "agency_local_collector_contact_note", { enumerable: true, get: function () { return AgencyLocalCollectorContactNote_1.agency_local_collector_contact_note; } });
const AgencyLocalCollectorLink_1 = require("./AgencyLocalCollectorLink");
Object.defineProperty(exports, "agency_local_collector_link", { enumerable: true, get: function () { return AgencyLocalCollectorLink_1.agency_local_collector_link; } });
const AgencyLocalCollectorNote_1 = require("./AgencyLocalCollectorNote");
Object.defineProperty(exports, "agency_local_collector_note", { enumerable: true, get: function () { return AgencyLocalCollectorNote_1.agency_local_collector_note; } });
const AgencyLocalContact_1 = require("./AgencyLocalContact");
Object.defineProperty(exports, "agency_local_contact", { enumerable: true, get: function () { return AgencyLocalContact_1.agency_local_contact; } });
const AgencyLocalContactNote_1 = require("./AgencyLocalContactNote");
Object.defineProperty(exports, "agency_local_contact_note", { enumerable: true, get: function () { return AgencyLocalContactNote_1.agency_local_contact_note; } });
const AgencyLocalLink_1 = require("./AgencyLocalLink");
Object.defineProperty(exports, "agency_local_link", { enumerable: true, get: function () { return AgencyLocalLink_1.agency_local_link; } });
const AgencyLocalNote_1 = require("./AgencyLocalNote");
Object.defineProperty(exports, "agency_local_note", { enumerable: true, get: function () { return AgencyLocalNote_1.agency_local_note; } });
const AgencyRate_1 = require("./AgencyRate");
Object.defineProperty(exports, "agency_rate", { enumerable: true, get: function () { return AgencyRate_1.agency_rate; } });
const AgencyState_1 = require("./AgencyState");
Object.defineProperty(exports, "agency_state", { enumerable: true, get: function () { return AgencyState_1.agency_state; } });
const AgencyTaxForm_1 = require("./AgencyTaxForm");
Object.defineProperty(exports, "agency_tax_form", { enumerable: true, get: function () { return AgencyTaxForm_1.agency_tax_form; } });
const AgencyTaxFormsCoSetting_1 = require("./AgencyTaxFormsCoSetting");
Object.defineProperty(exports, "agency_tax_forms_co_setting", { enumerable: true, get: function () { return AgencyTaxFormsCoSetting_1.agency_tax_forms_co_setting; } });
const AgencyTaxType_1 = require("./AgencyTaxType");
Object.defineProperty(exports, "agency_tax_type", { enumerable: true, get: function () { return AgencyTaxType_1.agency_tax_type; } });
const AntsDate_1 = require("./AntsDate");
Object.defineProperty(exports, "ants_date", { enumerable: true, get: function () { return AntsDate_1.ants_date; } });
const AppAvatar_1 = require("./AppAvatar");
Object.defineProperty(exports, "app_avatar", { enumerable: true, get: function () { return AppAvatar_1.app_avatar; } });
const AppDocument_1 = require("./AppDocument");
Object.defineProperty(exports, "app_document", { enumerable: true, get: function () { return AppDocument_1.app_document; } });
const AppIndustry_1 = require("./AppIndustry");
Object.defineProperty(exports, "app_industry", { enumerable: true, get: function () { return AppIndustry_1.app_industry; } });
const AppReport_1 = require("./AppReport");
Object.defineProperty(exports, "app_report", { enumerable: true, get: function () { return AppReport_1.app_report; } });
const AppUsageType_1 = require("./AppUsageType");
Object.defineProperty(exports, "app_usage_type", { enumerable: true, get: function () { return AppUsageType_1.app_usage_type; } });
const AppUserAgencyId_1 = require("./AppUserAgencyId");
Object.defineProperty(exports, "app_user_agency_id", { enumerable: true, get: function () { return AppUserAgencyId_1.app_user_agency_id; } });
const AppUserAgencyInfo_1 = require("./AppUserAgencyInfo");
Object.defineProperty(exports, "app_user_agency_info", { enumerable: true, get: function () { return AppUserAgencyInfo_1.app_user_agency_info; } });
const AppUserFailedLoginAttempt_1 = require("./AppUserFailedLoginAttempt");
Object.defineProperty(exports, "app_user_failed_login_attempt", { enumerable: true, get: function () { return AppUserFailedLoginAttempt_1.app_user_failed_login_attempt; } });
const AppUserInfo_1 = require("./AppUserInfo");
Object.defineProperty(exports, "app_user_info", { enumerable: true, get: function () { return AppUserInfo_1.app_user_info; } });
const AppUserProperty_1 = require("./AppUserProperty");
Object.defineProperty(exports, "app_user_property", { enumerable: true, get: function () { return AppUserProperty_1.app_user_property; } });
const AppUserSession_1 = require("./AppUserSession");
Object.defineProperty(exports, "app_user_session", { enumerable: true, get: function () { return AppUserSession_1.app_user_session; } });
const AppUserView_1 = require("./AppUserView");
Object.defineProperty(exports, "app_user_view", { enumerable: true, get: function () { return AppUserView_1.app_user_view; } });
const CoAgencyFilingType_1 = require("./CoAgencyFilingType");
Object.defineProperty(exports, "co_agency_filing_type", { enumerable: true, get: function () { return CoAgencyFilingType_1.co_agency_filing_type; } });
const CoAgencyTaxType_1 = require("./CoAgencyTaxType");
Object.defineProperty(exports, "co_agency_tax_type", { enumerable: true, get: function () { return CoAgencyTaxType_1.co_agency_tax_type; } });
const CoAlert_1 = require("./CoAlert");
Object.defineProperty(exports, "co_alert", { enumerable: true, get: function () { return CoAlert_1.co_alert; } });
const CoBilling_1 = require("./CoBilling");
Object.defineProperty(exports, "co_billing", { enumerable: true, get: function () { return CoBilling_1.co_billing; } });
const CoEmail_1 = require("./CoEmail");
Object.defineProperty(exports, "co_email", { enumerable: true, get: function () { return CoEmail_1.co_email; } });
const CoHiddenWorkflow_1 = require("./CoHiddenWorkflow");
Object.defineProperty(exports, "co_hidden_workflow", { enumerable: true, get: function () { return CoHiddenWorkflow_1.co_hidden_workflow; } });
const CoInfo_1 = require("./CoInfo");
Object.defineProperty(exports, "co_info", { enumerable: true, get: function () { return CoInfo_1.co_info; } });
const CoLetter_1 = require("./CoLetter");
Object.defineProperty(exports, "co_letter", { enumerable: true, get: function () { return CoLetter_1.co_letter; } });
const CoLettersAuto_1 = require("./CoLettersAuto");
Object.defineProperty(exports, "co_letters_auto", { enumerable: true, get: function () { return CoLettersAuto_1.co_letters_auto; } });
const CoOcrSyncSetting_1 = require("./CoOcrSyncSetting");
Object.defineProperty(exports, "co_ocr_sync_setting", { enumerable: true, get: function () { return CoOcrSyncSetting_1.co_ocr_sync_setting; } });
const CoWfAssignmentRule_1 = require("./CoWfAssignmentRule");
Object.defineProperty(exports, "co_wf_assignment_rule", { enumerable: true, get: function () { return CoWfAssignmentRule_1.co_wf_assignment_rule; } });
const CoWfOptionsCc_1 = require("./CoWfOptionsCc");
Object.defineProperty(exports, "co_wf_options_cc", { enumerable: true, get: function () { return CoWfOptionsCc_1.co_wf_options_cc; } });
const CoWfOptionsLetter_1 = require("./CoWfOptionsLetter");
Object.defineProperty(exports, "co_wf_options_letter", { enumerable: true, get: function () { return CoWfOptionsLetter_1.co_wf_options_letter; } });
const DataCaptureNoticeNote_1 = require("./DataCaptureNoticeNote");
Object.defineProperty(exports, "data_capture_notice_note", { enumerable: true, get: function () { return DataCaptureNoticeNote_1.data_capture_notice_note; } });
const DataCaptureReviewNote_1 = require("./DataCaptureReviewNote");
Object.defineProperty(exports, "data_capture_review_note", { enumerable: true, get: function () { return DataCaptureReviewNote_1.data_capture_review_note; } });
const DataImportChunk_1 = require("./DataImportChunk");
Object.defineProperty(exports, "data_import_chunk", { enumerable: true, get: function () { return DataImportChunk_1.data_import_chunk; } });
const DataImportLog_1 = require("./DataImportLog");
Object.defineProperty(exports, "data_import_log", { enumerable: true, get: function () { return DataImportLog_1.data_import_log; } });
const FailedJob_1 = require("./FailedJob");
Object.defineProperty(exports, "failed_job", { enumerable: true, get: function () { return FailedJob_1.failed_job; } });
const ImportLog_1 = require("./ImportLog");
Object.defineProperty(exports, "import_log", { enumerable: true, get: function () { return ImportLog_1.import_log; } });
const LinkedWfNote_1 = require("./LinkedWfNote");
Object.defineProperty(exports, "linked_wf_note", { enumerable: true, get: function () { return LinkedWfNote_1.linked_wf_note; } });
const MailAlert_1 = require("./MailAlert");
Object.defineProperty(exports, "mail_alert", { enumerable: true, get: function () { return MailAlert_1.mail_alert; } });
const ManagedServiceNotesSetting_1 = require("./ManagedServiceNotesSetting");
Object.defineProperty(exports, "managed_service_notes_setting", { enumerable: true, get: function () { return ManagedServiceNotesSetting_1.managed_service_notes_setting; } });
const MastertaxImportLog_1 = require("./MastertaxImportLog");
Object.defineProperty(exports, "mastertax_import_log", { enumerable: true, get: function () { return MastertaxImportLog_1.mastertax_import_log; } });
const MastertaxSetting_1 = require("./MastertaxSetting");
Object.defineProperty(exports, "mastertax_setting", { enumerable: true, get: function () { return MastertaxSetting_1.mastertax_setting; } });
const MicrosoftSetting_1 = require("./MicrosoftSetting");
Object.defineProperty(exports, "microsoft_setting", { enumerable: true, get: function () { return MicrosoftSetting_1.microsoft_setting; } });
const Migration_1 = require("./Migration");
Object.defineProperty(exports, "migration", { enumerable: true, get: function () { return Migration_1.migration; } });
const OauthAccessToken_1 = require("./OauthAccessToken");
Object.defineProperty(exports, "oauth_access_token", { enumerable: true, get: function () { return OauthAccessToken_1.oauth_access_token; } });
const OauthAuthCode_1 = require("./OauthAuthCode");
Object.defineProperty(exports, "oauth_auth_code", { enumerable: true, get: function () { return OauthAuthCode_1.oauth_auth_code; } });
const OauthClient_1 = require("./OauthClient");
Object.defineProperty(exports, "oauth_client", { enumerable: true, get: function () { return OauthClient_1.oauth_client; } });
const OauthPersonalAccessClient_1 = require("./OauthPersonalAccessClient");
Object.defineProperty(exports, "oauth_personal_access_client", { enumerable: true, get: function () { return OauthPersonalAccessClient_1.oauth_personal_access_client; } });
const OauthRefreshToken_1 = require("./OauthRefreshToken");
Object.defineProperty(exports, "oauth_refresh_token", { enumerable: true, get: function () { return OauthRefreshToken_1.oauth_refresh_token; } });
const OcrArchivedDocument_1 = require("./OcrArchivedDocument");
Object.defineProperty(exports, "ocr_archived_document", { enumerable: true, get: function () { return OcrArchivedDocument_1.ocr_archived_document; } });
const OcrMultipleTaxPeriod_1 = require("./OcrMultipleTaxPeriod");
Object.defineProperty(exports, "ocr_multiple_tax_period", { enumerable: true, get: function () { return OcrMultipleTaxPeriod_1.ocr_multiple_tax_period; } });
const OcrScannedDocument_1 = require("./OcrScannedDocument");
Object.defineProperty(exports, "ocr_scanned_document", { enumerable: true, get: function () { return OcrScannedDocument_1.ocr_scanned_document; } });
const PoaInfo_1 = require("./PoaInfo");
Object.defineProperty(exports, "poa_info", { enumerable: true, get: function () { return PoaInfo_1.poa_info; } });
const SecurityPasswordReset_1 = require("./SecurityPasswordReset");
Object.defineProperty(exports, "security_password_reset", { enumerable: true, get: function () { return SecurityPasswordReset_1.security_password_reset; } });
const SecurityRole_1 = require("./SecurityRole");
Object.defineProperty(exports, "security_role", { enumerable: true, get: function () { return SecurityRole_1.security_role; } });
const SecurityUserActivation_1 = require("./SecurityUserActivation");
Object.defineProperty(exports, "security_user_activation", { enumerable: true, get: function () { return SecurityUserActivation_1.security_user_activation; } });
const SysCsrList_1 = require("./SysCsrList");
Object.defineProperty(exports, "sys_csr_list", { enumerable: true, get: function () { return SysCsrList_1.sys_csr_list; } });
const SysDifficultyLevel_1 = require("./SysDifficultyLevel");
Object.defineProperty(exports, "sys_difficulty_level", { enumerable: true, get: function () { return SysDifficultyLevel_1.sys_difficulty_level; } });
const SysGuidanceAgencyInsight_1 = require("./SysGuidanceAgencyInsight");
Object.defineProperty(exports, "sys_guidance_agency_insight", { enumerable: true, get: function () { return SysGuidanceAgencyInsight_1.sys_guidance_agency_insight; } });
const SysGuidanceInfo_1 = require("./SysGuidanceInfo");
Object.defineProperty(exports, "sys_guidance_info", { enumerable: true, get: function () { return SysGuidanceInfo_1.sys_guidance_info; } });
const SysGuidanceLetter_1 = require("./SysGuidanceLetter");
Object.defineProperty(exports, "sys_guidance_letter", { enumerable: true, get: function () { return SysGuidanceLetter_1.sys_guidance_letter; } });
const SysGuidanceNote_1 = require("./SysGuidanceNote");
Object.defineProperty(exports, "sys_guidance_note", { enumerable: true, get: function () { return SysGuidanceNote_1.sys_guidance_note; } });
const SysGuidanceRelevantTaxAuth_1 = require("./SysGuidanceRelevantTaxAuth");
Object.defineProperty(exports, "sys_guidance_relevant_tax_auth", { enumerable: true, get: function () { return SysGuidanceRelevantTaxAuth_1.sys_guidance_relevant_tax_auth; } });
const SysGuidanceSummary_1 = require("./SysGuidanceSummary");
Object.defineProperty(exports, "sys_guidance_summary", { enumerable: true, get: function () { return SysGuidanceSummary_1.sys_guidance_summary; } });
const SysLetter_1 = require("./SysLetter");
Object.defineProperty(exports, "sys_letter", { enumerable: true, get: function () { return SysLetter_1.sys_letter; } });
const SysLettersEmailProperty_1 = require("./SysLettersEmailProperty");
Object.defineProperty(exports, "sys_letters_email_property", { enumerable: true, get: function () { return SysLettersEmailProperty_1.sys_letters_email_property; } });
const SysLettersMergeField_1 = require("./SysLettersMergeField");
Object.defineProperty(exports, "sys_letters_merge_field", { enumerable: true, get: function () { return SysLettersMergeField_1.sys_letters_merge_field; } });
const SysPriorityList_1 = require("./SysPriorityList");
Object.defineProperty(exports, "sys_priority_list", { enumerable: true, get: function () { return SysPriorityList_1.sys_priority_list; } });
const SysRegContact_1 = require("./SysRegContact");
Object.defineProperty(exports, "sys_reg_contact", { enumerable: true, get: function () { return SysRegContact_1.sys_reg_contact; } });
const SysTaskDefinition_1 = require("./SysTaskDefinition");
Object.defineProperty(exports, "sys_task_definition", { enumerable: true, get: function () { return SysTaskDefinition_1.sys_task_definition; } });
const SysTaxServiceLevelList_1 = require("./SysTaxServiceLevelList");
Object.defineProperty(exports, "sys_tax_service_level_list", { enumerable: true, get: function () { return SysTaxServiceLevelList_1.sys_tax_service_level_list; } });
const SysUserGroupList_1 = require("./SysUserGroupList");
Object.defineProperty(exports, "sys_user_group_list", { enumerable: true, get: function () { return SysUserGroupList_1.sys_user_group_list; } });
const SysWfAssignmentRuleType_1 = require("./SysWfAssignmentRuleType");
Object.defineProperty(exports, "sys_wf_assignment_rule_type", { enumerable: true, get: function () { return SysWfAssignmentRuleType_1.sys_wf_assignment_rule_type; } });
const SysWorkflow_1 = require("./SysWorkflow");
Object.defineProperty(exports, "sys_workflow", { enumerable: true, get: function () { return SysWorkflow_1.sys_workflow; } });
const SysWorkflowTask_1 = require("./SysWorkflowTask");
Object.defineProperty(exports, "sys_workflow_task", { enumerable: true, get: function () { return SysWorkflowTask_1.sys_workflow_task; } });
const SysWorkflowType_1 = require("./SysWorkflowType");
Object.defineProperty(exports, "sys_workflow_type", { enumerable: true, get: function () { return SysWorkflowType_1.sys_workflow_type; } });
const TempAccountAgency_1 = require("./TempAccountAgency");
Object.defineProperty(exports, "temp_account_agency", { enumerable: true, get: function () { return TempAccountAgency_1.temp_account_agency; } });
const TempAccountContactInfo_1 = require("./TempAccountContactInfo");
Object.defineProperty(exports, "temp_account_contact_info", { enumerable: true, get: function () { return TempAccountContactInfo_1.temp_account_contact_info; } });
const TempAccountInfo_1 = require("./TempAccountInfo");
Object.defineProperty(exports, "temp_account_info", { enumerable: true, get: function () { return TempAccountInfo_1.temp_account_info; } });
const Token_1 = require("./Token");
Object.defineProperty(exports, "token", { enumerable: true, get: function () { return Token_1.token; } });
const UserAgencyFilingType_1 = require("./UserAgencyFilingType");
Object.defineProperty(exports, "user_agency_filing_type", { enumerable: true, get: function () { return UserAgencyFilingType_1.user_agency_filing_type; } });
const UserAgencyTaxType_1 = require("./UserAgencyTaxType");
Object.defineProperty(exports, "user_agency_tax_type", { enumerable: true, get: function () { return UserAgencyTaxType_1.user_agency_tax_type; } });
const WfAlert_1 = require("./WfAlert");
Object.defineProperty(exports, "wf_alert", { enumerable: true, get: function () { return WfAlert_1.wf_alert; } });
const WfBulkNotice_1 = require("./WfBulkNotice");
Object.defineProperty(exports, "wf_bulk_notice", { enumerable: true, get: function () { return WfBulkNotice_1.wf_bulk_notice; } });
const WfCommunication_1 = require("./WfCommunication");
Object.defineProperty(exports, "wf_communication", { enumerable: true, get: function () { return WfCommunication_1.wf_communication; } });
const WfInfo_1 = require("./WfInfo");
Object.defineProperty(exports, "wf_info", { enumerable: true, get: function () { return WfInfo_1.wf_info; } });
const WfInfoNew_1 = require("./WfInfoNew");
Object.defineProperty(exports, "wf_info_new", { enumerable: true, get: function () { return WfInfoNew_1.wf_info_new; } });
const WfLinking_1 = require("./WfLinking");
Object.defineProperty(exports, "wf_linking", { enumerable: true, get: function () { return WfLinking_1.wf_linking; } });
const WfMultipleTaxPeriod_1 = require("./WfMultipleTaxPeriod");
Object.defineProperty(exports, "wf_multiple_tax_period", { enumerable: true, get: function () { return WfMultipleTaxPeriod_1.wf_multiple_tax_period; } });
const WfNote_1 = require("./WfNote");
Object.defineProperty(exports, "wf_note", { enumerable: true, get: function () { return WfNote_1.wf_note; } });
const WfRoundRobinAssignment_1 = require("./WfRoundRobinAssignment");
Object.defineProperty(exports, "wf_round_robin_assignment", { enumerable: true, get: function () { return WfRoundRobinAssignment_1.wf_round_robin_assignment; } });
const WfTaskAbatement_1 = require("./WfTaskAbatement");
Object.defineProperty(exports, "wf_task_abatement", { enumerable: true, get: function () { return WfTaskAbatement_1.wf_task_abatement; } });
const WfTaskAgencyFollowUp_1 = require("./WfTaskAgencyFollowUp");
Object.defineProperty(exports, "wf_task_agency_follow_up", { enumerable: true, get: function () { return WfTaskAgencyFollowUp_1.wf_task_agency_follow_up; } });
const WfTaskAmountDue_1 = require("./WfTaskAmountDue");
Object.defineProperty(exports, "wf_task_amount_due", { enumerable: true, get: function () { return WfTaskAmountDue_1.wf_task_amount_due; } });
const WfTaskClosure_1 = require("./WfTaskClosure");
Object.defineProperty(exports, "wf_task_closure", { enumerable: true, get: function () { return WfTaskClosure_1.wf_task_closure; } });
const WfTaskContact_1 = require("./WfTaskContact");
Object.defineProperty(exports, "wf_task_contact", { enumerable: true, get: function () { return WfTaskContact_1.wf_task_contact; } });
const WfTaskDepositRefund_1 = require("./WfTaskDepositRefund");
Object.defineProperty(exports, "wf_task_deposit_refund", { enumerable: true, get: function () { return WfTaskDepositRefund_1.wf_task_deposit_refund; } });
const WfTaskDetail_1 = require("./WfTaskDetail");
Object.defineProperty(exports, "wf_task_detail", { enumerable: true, get: function () { return WfTaskDetail_1.wf_task_detail; } });
const WfTaskDetailAr_1 = require("./WfTaskDetailAr");
Object.defineProperty(exports, "wf_task_detail_ar", { enumerable: true, get: function () { return WfTaskDetailAr_1.wf_task_detail_ar; } });
const WfTaskDetailReg_1 = require("./WfTaskDetailReg");
Object.defineProperty(exports, "wf_task_detail_reg", { enumerable: true, get: function () { return WfTaskDetailReg_1.wf_task_detail_reg; } });
const WfTaskGuidance_1 = require("./WfTaskGuidance");
Object.defineProperty(exports, "wf_task_guidance", { enumerable: true, get: function () { return WfTaskGuidance_1.wf_task_guidance; } });
const WfTaskInfo_1 = require("./WfTaskInfo");
Object.defineProperty(exports, "wf_task_info", { enumerable: true, get: function () { return WfTaskInfo_1.wf_task_info; } });
const WfTaskMovedPaymentInfo_1 = require("./WfTaskMovedPaymentInfo");
Object.defineProperty(exports, "wf_task_moved_payment_info", { enumerable: true, get: function () { return WfTaskMovedPaymentInfo_1.wf_task_moved_payment_info; } });
const WfTaskRate_1 = require("./WfTaskRate");
Object.defineProperty(exports, "wf_task_rate", { enumerable: true, get: function () { return WfTaskRate_1.wf_task_rate; } });
const WfTaskRefundDue_1 = require("./WfTaskRefundDue");
Object.defineProperty(exports, "wf_task_refund_due", { enumerable: true, get: function () { return WfTaskRefundDue_1.wf_task_refund_due; } });
const WfTaskResearch_1 = require("./WfTaskResearch");
Object.defineProperty(exports, "wf_task_research", { enumerable: true, get: function () { return WfTaskResearch_1.wf_task_research; } });
const WfTaskRoundRobinAssignment_1 = require("./WfTaskRoundRobinAssignment");
Object.defineProperty(exports, "wf_task_round_robin_assignment", { enumerable: true, get: function () { return WfTaskRoundRobinAssignment_1.wf_task_round_robin_assignment; } });
const WorkflowList_1 = require("./WorkflowList");
Object.defineProperty(exports, "workflow_list", { enumerable: true, get: function () { return WorkflowList_1.workflow_list; } });
const YardiSetting_1 = require("./YardiSetting");
Object.defineProperty(exports, "yardi_setting", { enumerable: true, get: function () { return YardiSetting_1.yardi_setting; } });
const ZendeskSetting_1 = require("./ZendeskSetting");
Object.defineProperty(exports, "zendesk_setting", { enumerable: true, get: function () { return ZendeskSetting_1.zendesk_setting; } });
function initModels(sequelize) {
    const CMPId = CmpId_1.CMPId.initModel(sequelize);
    const TEMP_account_contact_detail = TempAccountContactDetail_1.TEMP_account_contact_detail.initModel(sequelize);
    const TEMP_account_info_detail = TempAccountInfoDetail_1.TEMP_account_info_detail.initModel(sequelize);
    const TEMP_tbl_account_agency_data_detail = TempTblAccountAgencyDataDetail_1.TEMP_tbl_account_agency_data_detail.initModel(sequelize);
    const TEMP_tbl_account_data_detail = TempTblAccountDataDetail_1.TEMP_tbl_account_data_detail.initModel(sequelize);
    const TEMP_tbl_account_data_details_46 = TempTblAccountDataDetails46_1.TEMP_tbl_account_data_details_46.initModel(sequelize);
    const TEMP_tbl_agency_data_detail = TempTblAgencyDataDetail_1.TEMP_tbl_agency_data_detail.initModel(sequelize);
    const TEMP_tbl_contact_data_detail = TempTblContactDataDetail_1.TEMP_tbl_contact_data_detail.initModel(sequelize);
    const TEMP_tbl_sys_tax_service_level_list = TempTblSysTaxServiceLevelList_1.TEMP_tbl_sys_tax_service_level_list.initModel(sequelize);
    const account_agency = AccountAgency_1.account_agency.initModel(sequelize);
    const account_agency_e_service_login_credential = AccountAgencyEServiceLoginCredential_1.account_agency_e_service_login_credential.initModel(sequelize);
    const account_agency_id_info = AccountAgencyIdInfo_1.account_agency_id_info.initModel(sequelize);
    const account_agency_rate = AccountAgencyRate_1.account_agency_rate.initModel(sequelize);
    const account_alert_note = AccountAlertNote_1.account_alert_note.initModel(sequelize);
    const account_call_account_contact_info = AccountCallAccountContactInfo_1.account_call_account_contact_info.initModel(sequelize);
    const account_communication = AccountCommunication_1.account_communication.initModel(sequelize);
    const account_contact_group_linking = AccountContactGroupLinking_1.account_contact_group_linking.initModel(sequelize);
    const account_contact_info = AccountContactInfo_1.account_contact_info.initModel(sequelize);
    const account_contact_note = AccountContactNote_1.account_contact_note.initModel(sequelize);
    const account_info = AccountInfo_1.account_info.initModel(sequelize);
    const account_location_list = AccountLocationList_1.account_location_list.initModel(sequelize);
    const account_note = AccountNote_1.account_note.initModel(sequelize);
    const account_reg_contact = AccountRegContact_1.account_reg_contact.initModel(sequelize);
    const account_usage_type = AccountUsageType_1.account_usage_type.initModel(sequelize);
    const accounts_data_connectPay = AccountsDataConnectPay_1.accounts_data_connectPay.initModel(sequelize);
    const accounts_data_connectPay_accountid = AccountsDataConnectPayAccountid_1.accounts_data_connectPay_accountid.initModel(sequelize);
    const accounts_data_connectPay_datum = AccountsDataConnectPayDatum_1.accounts_data_connectPay_datum.initModel(sequelize);
    const accounts_data_connectPay_name = AccountsDataConnectPayName_1.accounts_data_connectPay_name.initModel(sequelize);
    const activity_log = ActivityLog_1.activity_log.initModel(sequelize);
    const activity_logs_old = ActivityLogsOld_1.activity_logs_old.initModel(sequelize);
    const agency_city = AgencyCity_1.agency_city.initModel(sequelize);
    const agency_city_address = AgencyCityAddress_1.agency_city_address.initModel(sequelize);
    const agency_city_contact = AgencyCityContact_1.agency_city_contact.initModel(sequelize);
    const agency_city_contact_note = AgencyCityContactNote_1.agency_city_contact_note.initModel(sequelize);
    const agency_city_link = AgencyCityLink_1.agency_city_link.initModel(sequelize);
    const agency_city_note = AgencyCityNote_1.agency_city_note.initModel(sequelize);
    const agency_country = AgencyCountry_1.agency_country.initModel(sequelize);
    const agency_department = AgencyDepartment_1.agency_department.initModel(sequelize);
    const agency_department_address = AgencyDepartmentAddress_1.agency_department_address.initModel(sequelize);
    const agency_department_contact = AgencyDepartmentContact_1.agency_department_contact.initModel(sequelize);
    const agency_department_contact_note = AgencyDepartmentContactNote_1.agency_department_contact_note.initModel(sequelize);
    const agency_department_link = AgencyDepartmentLink_1.agency_department_link.initModel(sequelize);
    const agency_department_note = AgencyDepartmentNote_1.agency_department_note.initModel(sequelize);
    const agency_department_vendor = AgencyDepartmentVendor_1.agency_department_vendor.initModel(sequelize);
    const agency_deposit_frequency_list = AgencyDepositFrequencyList_1.agency_deposit_frequency_list.initModel(sequelize);
    const agency_filing_type = AgencyFilingType_1.agency_filing_type.initModel(sequelize);
    const agency_form_keyword_type = AgencyFormKeywordType_1.agency_form_keyword_type.initModel(sequelize);
    const agency_form_number_attribute = AgencyFormNumberAttribute_1.agency_form_number_attribute.initModel(sequelize);
    const agency_form_number_note = AgencyFormNumberNote_1.agency_form_number_note.initModel(sequelize);
    const agency_form_number_rule = AgencyFormNumberRule_1.agency_form_number_rule.initModel(sequelize);
    const agency_form_number = AgencyFormNumber_1.agency_form_number.initModel(sequelize);
    const agency_id_co_detail = AgencyIdCoDetail_1.agency_id_co_detail.initModel(sequelize);
    const agency_id_info = AgencyIdInfo_1.agency_id_info.initModel(sequelize);
    const agency_id_type = AgencyIdType_1.agency_id_type.initModel(sequelize);
    const agency_info = AgencyInfo_1.agency_info.initModel(sequelize);
    const agency_link_type = AgencyLinkType_1.agency_link_type.initModel(sequelize);
    const agency_local = AgencyLocal_1.agency_local.initModel(sequelize);
    const agency_local_address = AgencyLocalAddress_1.agency_local_address.initModel(sequelize);
    const agency_local_collector = AgencyLocalCollector_1.agency_local_collector.initModel(sequelize);
    const agency_local_collector_address = AgencyLocalCollectorAddress_1.agency_local_collector_address.initModel(sequelize);
    const agency_local_collector_contact = AgencyLocalCollectorContact_1.agency_local_collector_contact.initModel(sequelize);
    const agency_local_collector_contact_note = AgencyLocalCollectorContactNote_1.agency_local_collector_contact_note.initModel(sequelize);
    const agency_local_collector_link = AgencyLocalCollectorLink_1.agency_local_collector_link.initModel(sequelize);
    const agency_local_collector_note = AgencyLocalCollectorNote_1.agency_local_collector_note.initModel(sequelize);
    const agency_local_contact = AgencyLocalContact_1.agency_local_contact.initModel(sequelize);
    const agency_local_contact_note = AgencyLocalContactNote_1.agency_local_contact_note.initModel(sequelize);
    const agency_local_link = AgencyLocalLink_1.agency_local_link.initModel(sequelize);
    const agency_local_note = AgencyLocalNote_1.agency_local_note.initModel(sequelize);
    const agency_rate = AgencyRate_1.agency_rate.initModel(sequelize);
    const agency_state = AgencyState_1.agency_state.initModel(sequelize);
    const agency_tax_form = AgencyTaxForm_1.agency_tax_form.initModel(sequelize);
    const agency_tax_forms_co_setting = AgencyTaxFormsCoSetting_1.agency_tax_forms_co_setting.initModel(sequelize);
    const agency_tax_type = AgencyTaxType_1.agency_tax_type.initModel(sequelize);
    const agency_tax_type = AgencyTaxType_1.agency_tax_type.initModel(sequelize);
    const ants_date = AntsDate_1.ants_date.initModel(sequelize);
    const app_avatar = AppAvatar_1.app_avatar.initModel(sequelize);
    const app_document = AppDocument_1.app_document.initModel(sequelize);
    const app_industry = AppIndustry_1.app_industry.initModel(sequelize);
    const app_report = AppReport_1.app_report.initModel(sequelize);
    const app_usage_type = AppUsageType_1.app_usage_type.initModel(sequelize);
    const app_user_agency_id = AppUserAgencyId_1.app_user_agency_id.initModel(sequelize);
    const app_user_agency_info = AppUserAgencyInfo_1.app_user_agency_info.initModel(sequelize);
    const app_user_failed_login_attempt = AppUserFailedLoginAttempt_1.app_user_failed_login_attempt.initModel(sequelize);
    const app_user_info = AppUserInfo_1.app_user_info.initModel(sequelize);
    const app_user_property = AppUserProperty_1.app_user_property.initModel(sequelize);
    const app_user_session = AppUserSession_1.app_user_session.initModel(sequelize);
    const app_user_view = AppUserView_1.app_user_view.initModel(sequelize);
    const co_agency_filing_type = CoAgencyFilingType_1.co_agency_filing_type.initModel(sequelize);
    const co_agency_tax_type = CoAgencyTaxType_1.co_agency_tax_type.initModel(sequelize);
    const co_alert = CoAlert_1.co_alert.initModel(sequelize);
    const co_billing = CoBilling_1.co_billing.initModel(sequelize);
    const co_email = CoEmail_1.co_email.initModel(sequelize);
    const co_hidden_workflow = CoHiddenWorkflow_1.co_hidden_workflow.initModel(sequelize);
    const co_info = CoInfo_1.co_info.initModel(sequelize);
    const co_letter = CoLetter_1.co_letter.initModel(sequelize);
    const co_letters_auto = CoLettersAuto_1.co_letters_auto.initModel(sequelize);
    const co_ocr_sync_setting = CoOcrSyncSetting_1.co_ocr_sync_setting.initModel(sequelize);
    const co_wf_assignment_rule = CoWfAssignmentRule_1.co_wf_assignment_rule.initModel(sequelize);
    const co_wf_options_cc = CoWfOptionsCc_1.co_wf_options_cc.initModel(sequelize);
    const co_wf_options_letter = CoWfOptionsLetter_1.co_wf_options_letter.initModel(sequelize);
    const data_capture_notice_note = DataCaptureNoticeNote_1.data_capture_notice_note.initModel(sequelize);
    const data_capture_review_note = DataCaptureReviewNote_1.data_capture_review_note.initModel(sequelize);
    const data_import_chunk = DataImportChunk_1.data_import_chunk.initModel(sequelize);
    const data_import_log = DataImportLog_1.data_import_log.initModel(sequelize);
    const failed_job = FailedJob_1.failed_job.initModel(sequelize);
    const import_log = ImportLog_1.import_log.initModel(sequelize);
    const linked_wf_note = LinkedWfNote_1.linked_wf_note.initModel(sequelize);
    const mail_alert = MailAlert_1.mail_alert.initModel(sequelize);
    const managed_service_notes_setting = ManagedServiceNotesSetting_1.managed_service_notes_setting.initModel(sequelize);
    const mastertax_import_log = MastertaxImportLog_1.mastertax_import_log.initModel(sequelize);
    const mastertax_setting = MastertaxSetting_1.mastertax_setting.initModel(sequelize);
    const microsoft_setting = MicrosoftSetting_1.microsoft_setting.initModel(sequelize);
    const migration = Migration_1.migration.initModel(sequelize);
    const oauth_access_token = OauthAccessToken_1.oauth_access_token.initModel(sequelize);
    const oauth_auth_code = OauthAuthCode_1.oauth_auth_code.initModel(sequelize);
    const oauth_client = OauthClient_1.oauth_client.initModel(sequelize);
    const oauth_personal_access_client = OauthPersonalAccessClient_1.oauth_personal_access_client.initModel(sequelize);
    const oauth_refresh_token = OauthRefreshToken_1.oauth_refresh_token.initModel(sequelize);
    const ocr_archived_document = OcrArchivedDocument_1.ocr_archived_document.initModel(sequelize);
    const ocr_multiple_tax_period = OcrMultipleTaxPeriod_1.ocr_multiple_tax_period.initModel(sequelize);
    const ocr_scanned_document = OcrScannedDocument_1.ocr_scanned_document.initModel(sequelize);
    const poa_info = PoaInfo_1.poa_info.initModel(sequelize);
    const security_password_reset = SecurityPasswordReset_1.security_password_reset.initModel(sequelize);
    const security_role = SecurityRole_1.security_role.initModel(sequelize);
    const security_user_activation = SecurityUserActivation_1.security_user_activation.initModel(sequelize);
    const sys_csr_list = SysCsrList_1.sys_csr_list.initModel(sequelize);
    const sys_difficulty_level = SysDifficultyLevel_1.sys_difficulty_level.initModel(sequelize);
    const sys_guidance_agency_insight = SysGuidanceAgencyInsight_1.sys_guidance_agency_insight.initModel(sequelize);
    const sys_guidance_info = SysGuidanceInfo_1.sys_guidance_info.initModel(sequelize);
    const sys_guidance_letter = SysGuidanceLetter_1.sys_guidance_letter.initModel(sequelize);
    const sys_guidance_note = SysGuidanceNote_1.sys_guidance_note.initModel(sequelize);
    const sys_guidance_relevant_tax_auth = SysGuidanceRelevantTaxAuth_1.sys_guidance_relevant_tax_auth.initModel(sequelize);
    const sys_guidance_summary = SysGuidanceSummary_1.sys_guidance_summary.initModel(sequelize);
    const sys_letter = SysLetter_1.sys_letter.initModel(sequelize);
    const sys_letters_email_property = SysLettersEmailProperty_1.sys_letters_email_property.initModel(sequelize);
    const sys_letters_merge_field = SysLettersMergeField_1.sys_letters_merge_field.initModel(sequelize);
    const sys_priority_list = SysPriorityList_1.sys_priority_list.initModel(sequelize);
    const sys_reg_contact = SysRegContact_1.sys_reg_contact.initModel(sequelize);
    const sys_task_definition = SysTaskDefinition_1.sys_task_definition.initModel(sequelize);
    const sys_tax_service_level_list = SysTaxServiceLevelList_1.sys_tax_service_level_list.initModel(sequelize);
    const sys_user_group_list = SysUserGroupList_1.sys_user_group_list.initModel(sequelize);
    const sys_wf_assignment_rule_type = SysWfAssignmentRuleType_1.sys_wf_assignment_rule_type.initModel(sequelize);
    const sys_workflow = SysWorkflow_1.sys_workflow.initModel(sequelize);
    const sys_workflow_task = SysWorkflowTask_1.sys_workflow_task.initModel(sequelize);
    const sys_workflow_type = SysWorkflowType_1.sys_workflow_type.initModel(sequelize);
    const temp_account_agency = TempAccountAgency_1.temp_account_agency.initModel(sequelize);
    const temp_account_contact_info = TempAccountContactInfo_1.temp_account_contact_info.initModel(sequelize);
    const temp_account_info = TempAccountInfo_1.temp_account_info.initModel(sequelize);
    const token = Token_1.token.initModel(sequelize);
    const user_agency_filing_type = UserAgencyFilingType_1.user_agency_filing_type.initModel(sequelize);
    const user_agency_tax_type = UserAgencyTaxType_1.user_agency_tax_type.initModel(sequelize);
    const wf_alert = WfAlert_1.wf_alert.initModel(sequelize);
    const wf_bulk_notice = WfBulkNotice_1.wf_bulk_notice.initModel(sequelize);
    const wf_communication = WfCommunication_1.wf_communication.initModel(sequelize);
    const wf_info = WfInfo_1.wf_info.initModel(sequelize);
    const wf_info_new = WfInfoNew_1.wf_info_new.initModel(sequelize);
    const wf_linking = WfLinking_1.wf_linking.initModel(sequelize);
    const wf_multiple_tax_period = WfMultipleTaxPeriod_1.wf_multiple_tax_period.initModel(sequelize);
    const wf_note = WfNote_1.wf_note.initModel(sequelize);
    const wf_round_robin_assignment = WfRoundRobinAssignment_1.wf_round_robin_assignment.initModel(sequelize);
    const wf_task_abatement = WfTaskAbatement_1.wf_task_abatement.initModel(sequelize);
    const wf_task_agency_follow_up = WfTaskAgencyFollowUp_1.wf_task_agency_follow_up.initModel(sequelize);
    const wf_task_amount_due = WfTaskAmountDue_1.wf_task_amount_due.initModel(sequelize);
    const wf_task_closure = WfTaskClosure_1.wf_task_closure.initModel(sequelize);
    const wf_task_contact = WfTaskContact_1.wf_task_contact.initModel(sequelize);
    const wf_task_deposit_refund = WfTaskDepositRefund_1.wf_task_deposit_refund.initModel(sequelize);
    const wf_task_detail = WfTaskDetail_1.wf_task_detail.initModel(sequelize);
    const wf_task_detail_ar = WfTaskDetailAr_1.wf_task_detail_ar.initModel(sequelize);
    const wf_task_detail_reg = WfTaskDetailReg_1.wf_task_detail_reg.initModel(sequelize);
    const wf_task_guidance = WfTaskGuidance_1.wf_task_guidance.initModel(sequelize);
    const wf_task_info = WfTaskInfo_1.wf_task_info.initModel(sequelize);
    const wf_task_moved_payment_info = WfTaskMovedPaymentInfo_1.wf_task_moved_payment_info.initModel(sequelize);
    const wf_task_rate = WfTaskRate_1.wf_task_rate.initModel(sequelize);
    const wf_task_refund_due = WfTaskRefundDue_1.wf_task_refund_due.initModel(sequelize);
    const wf_task_research = WfTaskResearch_1.wf_task_research.initModel(sequelize);
    const wf_task_round_robin_assignment = WfTaskRoundRobinAssignment_1.wf_task_round_robin_assignment.initModel(sequelize);
    const workflow_list = WorkflowList_1.workflow_list.initModel(sequelize);
    const yardi_setting = YardiSetting_1.yardi_setting.initModel(sequelize);
    const zendesk_setting = ZendeskSetting_1.zendesk_setting.initModel(sequelize);
    account_contact_info.belongsToMany(workflow_list, { as: 'workflow_list_id_workflow_lists', through: account_contact_group_linking, foreignKey: "account_contact_info_id", otherKey: "workflow_list_id" });
    account_info.belongsToMany(wf_info, { as: 'wf_info_id_wf_infos', through: wf_bulk_notice, foreignKey: "account_info_id", otherKey: "wf_info_id" });
    wf_info.belongsToMany(account_info, { as: 'account_info_id_account_infos', through: wf_bulk_notice, foreignKey: "wf_info_id", otherKey: "account_info_id" });
    workflow_list.belongsToMany(account_contact_info, { as: 'account_contact_info_id_account_contact_infos', through: account_contact_group_linking, foreignKey: "workflow_list_id", otherKey: "account_contact_info_id" });
    ocr_archived_document.belongsTo(account_agency, { as: "account_agency", foreignKey: "account_agency_id" });
    account_agency.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "account_agency_id" });
    ocr_scanned_document.belongsTo(account_agency, { as: "account_agency", foreignKey: "account_agency_id" });
    account_agency.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "account_agency_id" });
    wf_info.belongsTo(account_agency, { as: "issuing_agency_account_agency", foreignKey: "issuing_agency" });
    account_agency.hasMany(wf_info, { as: "wf_infos", foreignKey: "issuing_agency" });
    wf_info_new.belongsTo(account_agency, { as: "issuing_agency_account_agency", foreignKey: "issuing_agency" });
    account_agency.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "issuing_agency" });
    account_contact_group_linking.belongsTo(account_contact_info, { as: "account_contact_info", foreignKey: "account_contact_info_id" });
    account_contact_info.hasMany(account_contact_group_linking, { as: "account_contact_group_linkings", foreignKey: "account_contact_info_id" });
    account_contact_note.belongsTo(account_contact_info, { as: "account_contact_info", foreignKey: "account_contact_info_id" });
    account_contact_info.hasMany(account_contact_note, { as: "account_contact_notes", foreignKey: "account_contact_info_id" });
    wf_info.belongsTo(account_contact_info, { as: "poa_recipient_account_contact_info", foreignKey: "poa_recipient" });
    account_contact_info.hasMany(wf_info, { as: "wf_infos", foreignKey: "poa_recipient" });
    wf_info_new.belongsTo(account_contact_info, { as: "poa_recipient_account_contact_info", foreignKey: "poa_recipient" });
    account_contact_info.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "poa_recipient" });
    account_agency.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(account_agency, { as: "account_agencies", foreignKey: "account_info_id" });
    account_call_account_contact_info.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(account_call_account_contact_info, { as: "account_call_account_contact_infos", foreignKey: "account_info_id" });
    account_communication.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(account_communication, { as: "account_communications", foreignKey: "account_info_id" });
    account_contact_info.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(account_contact_info, { as: "account_contact_infos", foreignKey: "account_info_id" });
    account_note.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(account_note, { as: "account_notes", foreignKey: "account_info_id" });
    ocr_archived_document.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "account_info_id" });
    ocr_scanned_document.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "account_info_id" });
    wf_bulk_notice.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(wf_bulk_notice, { as: "wf_bulk_notices", foreignKey: "account_info_id" });
    wf_info.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(wf_info, { as: "wf_infos", foreignKey: "account_info_id" });
    wf_info_new.belongsTo(account_info, { as: "account_info", foreignKey: "account_info_id" });
    account_info.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "account_info_id" });
    account_info.belongsTo(account_location_list, { as: "account_location_list", foreignKey: "account_location_list_id" });
    account_location_list.hasMany(account_info, { as: "account_infos", foreignKey: "account_location_list_id" });
    account_agency.belongsTo(agency_city, { as: "agency_city_agency_city", foreignKey: "agency_city" });
    agency_city.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_city" });
    agency_city_address.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id" });
    agency_city.hasMany(agency_city_address, { as: "agency_city_addresses", foreignKey: "agency_city_id" });
    agency_city_contact.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id" });
    agency_city.hasMany(agency_city_contact, { as: "agency_city_contacts", foreignKey: "agency_city_id" });
    agency_city_link.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id" });
    agency_city.hasMany(agency_city_link, { as: "agency_city_links", foreignKey: "agency_city_id" });
    agency_city_note.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id" });
    agency_city.hasMany(agency_city_note, { as: "agency_city_notes", foreignKey: "agency_city_id" });
    ocr_archived_document.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id" });
    agency_city.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_city_id" });
    ocr_scanned_document.belongsTo(agency_city, { as: "agency_city", foreignKey: "agency_city_id" });
    agency_city.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_city_id" });
    wf_info.belongsTo(agency_city, { as: "agency_city_agency_city", foreignKey: "agency_city" });
    agency_city.hasMany(wf_info, { as: "wf_infos", foreignKey: "agency_city" });
    wf_info_new.belongsTo(agency_city, { as: "agency_city_agency_city", foreignKey: "agency_city" });
    agency_city.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "agency_city" });
    agency_city_contact.belongsTo(agency_city_address, { as: "address", foreignKey: "address_id" });
    agency_city_address.hasMany(agency_city_contact, { as: "agency_city_contacts", foreignKey: "address_id" });
    agency_city_contact_note.belongsTo(agency_city_contact, { as: "agency_city_contact", foreignKey: "agency_city_contact_id" });
    agency_city_contact.hasMany(agency_city_contact_note, { as: "agency_city_contact_notes", foreignKey: "agency_city_contact_id" });
    account_info.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country" });
    agency_country.hasMany(account_info, { as: "account_infos", foreignKey: "country" });
    agency_info.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country" });
    agency_country.hasMany(agency_info, { as: "agency_infos", foreignKey: "country" });
    agency_state.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country" });
    agency_country.hasMany(agency_state, { as: "agency_states", foreignKey: "country" });
    co_info.belongsTo(agency_country, { as: "country_agency_country", foreignKey: "country" });
    agency_country.hasMany(co_info, { as: "co_infos", foreignKey: "country" });
    ocr_archived_document.belongsTo(agency_country, { as: "agency_country", foreignKey: "agency_countries_id" });
    agency_country.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_countries_id" });
    ocr_scanned_document.belongsTo(agency_country, { as: "agency_country", foreignKey: "agency_countries_id" });
    agency_country.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_countries_id" });
    agency_department_address.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id" });
    agency_department.hasMany(agency_department_address, { as: "agency_department_addresses", foreignKey: "agency_department_id" });
    agency_department_contact.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id" });
    agency_department.hasMany(agency_department_contact, { as: "agency_department_contacts", foreignKey: "agency_department_id" });
    agency_department_link.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id" });
    agency_department.hasMany(agency_department_link, { as: "agency_department_links", foreignKey: "agency_department_id" });
    agency_department_note.belongsTo(agency_department, { as: "agency_department", foreignKey: "agency_department_id" });
    agency_department.hasMany(agency_department_note, { as: "agency_department_notes", foreignKey: "agency_department_id" });
    ocr_archived_document.belongsTo(agency_department, { as: "agency_dept", foreignKey: "agency_dept_id" });
    agency_department.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_dept_id" });
    ocr_scanned_document.belongsTo(agency_department, { as: "agency_dept", foreignKey: "agency_dept_id" });
    agency_department.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_dept_id" });
    wf_info.belongsTo(agency_department, { as: "agency_dept_agency_department", foreignKey: "agency_dept" });
    agency_department.hasMany(wf_info, { as: "wf_infos", foreignKey: "agency_dept" });
    wf_info_new.belongsTo(agency_department, { as: "agency_dept_agency_department", foreignKey: "agency_dept" });
    agency_department.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "agency_dept" });
    agency_department_contact.belongsTo(agency_department_address, { as: "address", foreignKey: "address_id" });
    agency_department_address.hasMany(agency_department_contact, { as: "agency_department_contacts", foreignKey: "address_id" });
    agency_department_contact_note.belongsTo(agency_department_contact, { as: "agency_department_contact", foreignKey: "agency_department_contact_id" });
    agency_department_contact.hasMany(agency_department_contact_note, { as: "agency_department_contact_notes", foreignKey: "agency_department_contact_id" });
    account_agency.belongsTo(agency_deposit_frequency_list, { as: "agency_deposit_frequency_list", foreignKey: "agency_deposit_frequency_list_id" });
    agency_deposit_frequency_list.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_deposit_frequency_list_id" });
    agency_form_number_attribute.belongsTo(agency_form_keyword_type, { as: "agency_form_keyword_type", foreignKey: "agency_form_keyword_type_id" });
    agency_form_keyword_type.hasMany(agency_form_number_attribute, { as: "agency_form_number_attributes", foreignKey: "agency_form_keyword_type_id" });
    agency_form_number_rule.belongsTo(agency_form_number_attribute, { as: "agency_form_number_attribute", foreignKey: "agency_form_number_attribute_id" });
    agency_form_number_attribute.hasMany(agency_form_number_rule, { as: "agency_form_number_rules", foreignKey: "agency_form_number_attribute_id" });
    agency_form_number_attribute.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id" });
    agency_form_number.hasMany(agency_form_number_attribute, { as: "agency_form_number_attributes", foreignKey: "agency_form_number_id" });
    agency_form_number_note.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id" });
    agency_form_number.hasMany(agency_form_number_note, { as: "agency_form_number_notes", foreignKey: "agency_form_number_id" });
    ocr_archived_document.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id" });
    agency_form_number.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_form_number_id" });
    ocr_scanned_document.belongsTo(agency_form_number, { as: "agency_form_number", foreignKey: "agency_form_number_id" });
    agency_form_number.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_form_number_id" });
    agency_id_co_detail.belongsTo(agency_id_info, { as: "agency_id_info", foreignKey: "agency_id_info_id" });
    agency_id_info.hasMany(agency_id_co_detail, { as: "agency_id_co_details", foreignKey: "agency_id_info_id" });
    account_agency.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_info_id" });
    agency_city.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(agency_city, { as: "agency_cities", foreignKey: "agency_info_id" });
    agency_department.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(agency_department, { as: "agency_departments", foreignKey: "agency_info_id" });
    agency_form_number.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(agency_form_number, { as: "agency_form_numbers", foreignKey: "agency_info_id" });
    agency_id_info.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(agency_id_info, { as: "agency_id_infos", foreignKey: "agency_info_id" });
    agency_local.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(agency_local, { as: "agency_locals", foreignKey: "agency_info_id" });
    agency_tax_form.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(agency_tax_form, { as: "agency_tax_forms", foreignKey: "agency_info_id" });
    app_user_agency_info.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(app_user_agency_info, { as: "app_user_agency_infos", foreignKey: "agency_info_id" });
    ocr_archived_document.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_info_id" });
    ocr_scanned_document.belongsTo(agency_info, { as: "agency_info", foreignKey: "agency_info_id" });
    agency_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_info_id" });
    agency_city_link.belongsTo(agency_link_type, { as: "agency_link_type", foreignKey: "agency_link_type_id" });
    agency_link_type.hasMany(agency_city_link, { as: "agency_city_links", foreignKey: "agency_link_type_id" });
    agency_department_link.belongsTo(agency_link_type, { as: "agency_link_type", foreignKey: "agency_link_type_id" });
    agency_link_type.hasMany(agency_department_link, { as: "agency_department_links", foreignKey: "agency_link_type_id" });
    agency_local_link.belongsTo(agency_link_type, { as: "agency_link_type", foreignKey: "agency_link_type_id" });
    agency_link_type.hasMany(agency_local_link, { as: "agency_local_links", foreignKey: "agency_link_type_id" });
    account_agency.belongsTo(agency_local, { as: "agency_local_agency_local", foreignKey: "agency_local" });
    agency_local.hasMany(account_agency, { as: "account_agencies", foreignKey: "agency_local" });
    agency_local_address.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id" });
    agency_local.hasMany(agency_local_address, { as: "agency_local_addresses", foreignKey: "agency_local_id" });
    agency_local_contact.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id" });
    agency_local.hasMany(agency_local_contact, { as: "agency_local_contacts", foreignKey: "agency_local_id" });
    agency_local_link.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id" });
    agency_local.hasMany(agency_local_link, { as: "agency_local_links", foreignKey: "agency_local_id" });
    agency_local_note.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id" });
    agency_local.hasMany(agency_local_note, { as: "agency_local_notes", foreignKey: "agency_local_id" });
    ocr_archived_document.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id" });
    agency_local.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "agency_local_id" });
    ocr_scanned_document.belongsTo(agency_local, { as: "agency_local", foreignKey: "agency_local_id" });
    agency_local.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "agency_local_id" });
    wf_info.belongsTo(agency_local, { as: "agency_local_agency_local", foreignKey: "agency_local" });
    agency_local.hasMany(wf_info, { as: "wf_infos", foreignKey: "agency_local" });
    wf_info_new.belongsTo(agency_local, { as: "agency_local_agency_local", foreignKey: "agency_local" });
    agency_local.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "agency_local" });
    agency_local_contact.belongsTo(agency_local_address, { as: "address", foreignKey: "address_id" });
    agency_local_address.hasMany(agency_local_contact, { as: "agency_local_contacts", foreignKey: "address_id" });
    agency_city.belongsTo(agency_local_collector, { as: "tax_collector", foreignKey: "tax_collector_id" });
    agency_local_collector.hasMany(agency_city, { as: "agency_cities", foreignKey: "tax_collector_id" });
    agency_local.belongsTo(agency_local_collector, { as: "tax_collector", foreignKey: "tax_collector_id" });
    agency_local_collector.hasMany(agency_local, { as: "agency_locals", foreignKey: "tax_collector_id" });
    agency_local_collector_address.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id" });
    agency_local_collector.hasMany(agency_local_collector_address, { as: "agency_local_collector_addresses", foreignKey: "agency_local_collector_id" });
    agency_local_collector_contact.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id" });
    agency_local_collector.hasMany(agency_local_collector_contact, { as: "agency_local_collector_contacts", foreignKey: "agency_local_collector_id" });
    agency_local_collector_link.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id" });
    agency_local_collector.hasMany(agency_local_collector_link, { as: "agency_local_collector_links", foreignKey: "agency_local_collector_id" });
    agency_local_collector_note.belongsTo(agency_local_collector, { as: "agency_local_collector", foreignKey: "agency_local_collector_id" });
    agency_local_collector.hasMany(agency_local_collector_note, { as: "agency_local_collector_notes", foreignKey: "agency_local_collector_id" });
    agency_local_collector_contact.belongsTo(agency_local_collector_address, { as: "address", foreignKey: "address_id" });
    agency_local_collector_address.hasMany(agency_local_collector_contact, { as: "agency_local_collector_contacts", foreignKey: "address_id" });
    agency_local_collector_contact_note.belongsTo(agency_local_collector_contact, { as: "agency_local_collector_contact", foreignKey: "agency_local_collector_contact_id" });
    agency_local_collector_contact.hasMany(agency_local_collector_contact_note, { as: "agency_local_collector_contact_notes", foreignKey: "agency_local_collector_contact_id" });
    agency_local_contact_note.belongsTo(agency_local_contact, { as: "agency_local_contact", foreignKey: "agency_local_contact_id" });
    agency_local_contact.hasMany(agency_local_contact_note, { as: "agency_local_contact_notes", foreignKey: "agency_local_contact_id" });
    wf_info.belongsTo(agency_tax_form, { as: "poa_form_agency_tax_form", foreignKey: "poa_form" });
    agency_tax_form.hasMany(wf_info, { as: "wf_infos", foreignKey: "poa_form" });
    wf_info_new.belongsTo(agency_tax_form, { as: "poa_form_agency_tax_form", foreignKey: "poa_form" });
    agency_tax_form.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "poa_form" });
    co_info.belongsTo(app_industry, { as: "industry_app_industry", foreignKey: "industry" });
    app_industry.hasMany(co_info, { as: "co_infos", foreignKey: "industry" });
    account_usage_type.belongsTo(app_usage_type, { as: "app_usage_type", foreignKey: "app_usage_type_id" });
    app_usage_type.hasMany(account_usage_type, { as: "account_usage_types", foreignKey: "app_usage_type_id" });
    account_agency.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(account_agency, { as: "account_agencies", foreignKey: "created_by" });
    account_agency.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(account_agency, { as: "updated_by_account_agencies", foreignKey: "updated_by" });
    account_contact_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(account_contact_info, { as: "account_contact_infos", foreignKey: "created_by" });
    account_contact_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(account_contact_info, { as: "updated_by_account_contact_infos", foreignKey: "updated_by" });
    account_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(account_contact_note, { as: "account_contact_notes", foreignKey: "created_by" });
    account_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(account_contact_note, { as: "updated_by_account_contact_notes", foreignKey: "updated_by" });
    account_info.belongsTo(app_user_info, { as: "assignment_2_app_user_info", foreignKey: "assignment_2" });
    app_user_info.hasMany(account_info, { as: "account_infos", foreignKey: "assignment_2" });
    account_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(account_info, { as: "created_by_account_infos", foreignKey: "created_by" });
    account_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(account_info, { as: "updated_by_account_infos", foreignKey: "updated_by" });
    agency_city.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_city, { as: "agency_cities", foreignKey: "created_by" });
    agency_city.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_city, { as: "updated_by_agency_cities", foreignKey: "updated_by" });
    agency_city_address.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_city_address, { as: "agency_city_addresses", foreignKey: "created_by" });
    agency_city_address.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_city_address, { as: "updated_by_agency_city_addresses", foreignKey: "updated_by" });
    agency_city_contact.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_city_contact, { as: "agency_city_contacts", foreignKey: "created_by" });
    agency_city_contact.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_city_contact, { as: "updated_by_agency_city_contacts", foreignKey: "updated_by" });
    agency_city_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_city_contact_note, { as: "agency_city_contact_notes", foreignKey: "created_by" });
    agency_city_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_city_contact_note, { as: "updated_by_agency_city_contact_notes", foreignKey: "updated_by" });
    agency_city_link.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_city_link, { as: "agency_city_links", foreignKey: "created_by" });
    agency_city_link.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_city_link, { as: "updated_by_agency_city_links", foreignKey: "updated_by" });
    agency_city_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_city_note, { as: "agency_city_notes", foreignKey: "created_by" });
    agency_city_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_city_note, { as: "updated_by_agency_city_notes", foreignKey: "updated_by" });
    agency_department.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_department, { as: "agency_departments", foreignKey: "created_by" });
    agency_department.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_department, { as: "updated_by_agency_departments", foreignKey: "updated_by" });
    agency_department_address.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_department_address, { as: "agency_department_addresses", foreignKey: "created_by" });
    agency_department_address.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_department_address, { as: "updated_by_agency_department_addresses", foreignKey: "updated_by" });
    agency_department_contact.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_department_contact, { as: "agency_department_contacts", foreignKey: "created_by" });
    agency_department_contact.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_department_contact, { as: "updated_by_agency_department_contacts", foreignKey: "updated_by" });
    agency_department_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_department_contact_note, { as: "agency_department_contact_notes", foreignKey: "created_by" });
    agency_department_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_department_contact_note, { as: "updated_by_agency_department_contact_notes", foreignKey: "updated_by" });
    agency_department_link.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_department_link, { as: "agency_department_links", foreignKey: "created_by" });
    agency_department_link.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_department_link, { as: "updated_by_agency_department_links", foreignKey: "updated_by" });
    agency_department_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_department_note, { as: "agency_department_notes", foreignKey: "created_by" });
    agency_department_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_department_note, { as: "updated_by_agency_department_notes", foreignKey: "updated_by" });
    agency_local.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_local, { as: "agency_locals", foreignKey: "created_by" });
    agency_local.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_local, { as: "updated_by_agency_locals", foreignKey: "updated_by" });
    agency_local_address.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_local_address, { as: "agency_local_addresses", foreignKey: "created_by" });
    agency_local_address.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_local_address, { as: "updated_by_agency_local_addresses", foreignKey: "updated_by" });
    agency_local_collector_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_local_collector_contact_note, { as: "agency_local_collector_contact_notes", foreignKey: "created_by" });
    agency_local_collector_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_local_collector_contact_note, { as: "updated_by_agency_local_collector_contact_notes", foreignKey: "updated_by" });
    agency_local_contact.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_local_contact, { as: "agency_local_contacts", foreignKey: "created_by" });
    agency_local_contact.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_local_contact, { as: "updated_by_agency_local_contacts", foreignKey: "updated_by" });
    agency_local_contact_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_local_contact_note, { as: "agency_local_contact_notes", foreignKey: "created_by" });
    agency_local_contact_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_local_contact_note, { as: "updated_by_agency_local_contact_notes", foreignKey: "updated_by" });
    agency_local_link.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_local_link, { as: "agency_local_links", foreignKey: "created_by" });
    agency_local_link.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_local_link, { as: "updated_by_agency_local_links", foreignKey: "updated_by" });
    agency_local_note.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(agency_local_note, { as: "agency_local_notes", foreignKey: "created_by" });
    agency_local_note.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(agency_local_note, { as: "updated_by_agency_local_notes", foreignKey: "updated_by" });
    app_user_agency_info.belongsTo(app_user_info, { as: "app_user_info", foreignKey: "app_user_info_id" });
    app_user_info.hasMany(app_user_agency_info, { as: "app_user_agency_infos", foreignKey: "app_user_info_id" });
    app_user_agency_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(app_user_agency_info, { as: "created_by_app_user_agency_infos", foreignKey: "created_by" });
    app_user_agency_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(app_user_agency_info, { as: "updated_by_app_user_agency_infos", foreignKey: "updated_by" });
    app_user_view.belongsTo(app_user_info, { as: "user", foreignKey: "user_id" });
    app_user_info.hasMany(app_user_view, { as: "app_user_views", foreignKey: "user_id" });
    ocr_archived_document.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "created_by" });
    ocr_scanned_document.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "created_by" });
    wf_info.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(wf_info, { as: "wf_infos", foreignKey: "created_by" });
    wf_info.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(wf_info, { as: "updated_by_wf_infos", foreignKey: "updated_by" });
    wf_info_new.belongsTo(app_user_info, { as: "updated_by_app_user_info", foreignKey: "updated_by" });
    app_user_info.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "updated_by" });
    wf_info_new.belongsTo(app_user_info, { as: "created_by_app_user_info", foreignKey: "created_by" });
    app_user_info.hasMany(wf_info_new, { as: "created_by_wf_info_news", foreignKey: "created_by" });
    wf_task_detail_ar.belongsTo(app_user_info, { as: "ar_review_by_app_user_info", foreignKey: "ar_review_by" });
    app_user_info.hasMany(wf_task_detail_ar, { as: "wf_task_detail_ars", foreignKey: "ar_review_by" });
    wf_task_info.belongsTo(app_user_info, { as: "assigned_to_app_user_info", foreignKey: "assigned_to" });
    app_user_info.hasMany(wf_task_info, { as: "wf_task_infos", foreignKey: "assigned_to" });
    account_info.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(account_info, { as: "account_infos", foreignKey: "co_info_id" });
    account_location_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(account_location_list, { as: "account_location_lists", foreignKey: "co_info_id" });
    account_note.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(account_note, { as: "account_notes", foreignKey: "co_info_id" });
    account_usage_type.belongsTo(co_info, { as: "co", foreignKey: "co_id" });
    co_info.hasMany(account_usage_type, { as: "account_usage_types", foreignKey: "co_id" });
    agency_city.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_city, { as: "agency_cities", foreignKey: "co_info_id" });
    agency_department.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_department, { as: "agency_departments", foreignKey: "co_info_id" });
    agency_deposit_frequency_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_deposit_frequency_list, { as: "agency_deposit_frequency_lists", foreignKey: "co_info_id" });
    agency_form_number_rule.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_form_number_rule, { as: "agency_form_number_rules", foreignKey: "co_info_id" });
    agency_form_number.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_form_number, { as: "agency_form_numbers", foreignKey: "co_info_id" });
    agency_id_co_detail.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_id_co_detail, { as: "agency_id_co_details", foreignKey: "co_info_id" });
    agency_local.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_local, { as: "agency_locals", foreignKey: "co_info_id" });
    agency_tax_form.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_tax_form, { as: "agency_tax_forms", foreignKey: "co_info_id" });
    agency_tax_type.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(agency_tax_type, { as: "agency_tax_types", foreignKey: "co_info_id" });
    app_user_agency_info.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(app_user_agency_info, { as: "app_user_agency_infos", foreignKey: "co_info_id" });
    app_user_info.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(app_user_info, { as: "app_user_infos", foreignKey: "co_info_id" });
    co_billing.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(co_billing, { as: "co_billings", foreignKey: "co_info_id" });
    managed_service_notes_setting.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(managed_service_notes_setting, { as: "managed_service_notes_settings", foreignKey: "co_info_id" });
    mastertax_setting.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(mastertax_setting, { as: "mastertax_settings", foreignKey: "co_info_id" });
    ocr_archived_document.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "co_info_id" });
    ocr_scanned_document.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "co_info_id" });
    sys_csr_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(sys_csr_list, { as: "sys_csr_lists", foreignKey: "co_info_id" });
    sys_priority_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(sys_priority_list, { as: "sys_priority_lists", foreignKey: "co_info_id" });
    sys_tax_service_level_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(sys_tax_service_level_list, { as: "sys_tax_service_level_lists", foreignKey: "co_info_id" });
    sys_user_group_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(sys_user_group_list, { as: "sys_user_group_lists", foreignKey: "co_info_id" });
    sys_workflow.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "co_info_id" });
    wf_task_amount_due.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(wf_task_amount_due, { as: "wf_task_amount_dues", foreignKey: "co_info_id" });
    wf_task_closure.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(wf_task_closure, { as: "wf_task_closures", foreignKey: "co_info_id" });
    wf_task_contact.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(wf_task_contact, { as: "wf_task_contacts", foreignKey: "co_info_id" });
    wf_task_detail.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(wf_task_detail, { as: "wf_task_details", foreignKey: "co_info_id" });
    wf_task_detail_ar.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(wf_task_detail_ar, { as: "wf_task_detail_ars", foreignKey: "co_info_id" });
    wf_task_detail_reg.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(wf_task_detail_reg, { as: "wf_task_detail_regs", foreignKey: "co_info_id" });
    wf_task_refund_due.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(wf_task_refund_due, { as: "wf_task_refund_dues", foreignKey: "co_info_id" });
    workflow_list.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(workflow_list, { as: "workflow_lists", foreignKey: "co_info_id" });
    zendesk_setting.belongsTo(co_info, { as: "co_info", foreignKey: "co_info_id" });
    co_info.hasMany(zendesk_setting, { as: "zendesk_settings", foreignKey: "co_info_id" });
    data_import_chunk.belongsTo(data_import_log, { as: "data_import_log", foreignKey: "data_import_logs_id" });
    data_import_log.hasMany(data_import_chunk, { as: "data_import_chunks", foreignKey: "data_import_logs_id" });
    account_info.belongsTo(sys_csr_list, { as: "sys_csr_list", foreignKey: "sys_csr_list_id" });
    sys_csr_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_csr_list_id" });
    sys_workflow.belongsTo(sys_difficulty_level, { as: "sys_difficulty_level", foreignKey: "sys_difficulty_level_id" });
    sys_difficulty_level.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "sys_difficulty_level_id" });
    account_info.belongsTo(sys_priority_list, { as: "sys_priority_list", foreignKey: "sys_priority_list_id" });
    sys_priority_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_priority_list_id" });
    sys_workflow.belongsTo(sys_priority_list, { as: "sys_priority_list", foreignKey: "sys_priority_list_id" });
    sys_priority_list.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "sys_priority_list_id" });
    sys_workflow_task.belongsTo(sys_task_definition, { as: "sys_task_definition", foreignKey: "sys_task_definition_id" });
    sys_task_definition.hasMany(sys_workflow_task, { as: "sys_workflow_tasks", foreignKey: "sys_task_definition_id" });
    wf_task_info.belongsTo(sys_task_definition, { as: "sys_task_definition", foreignKey: "sys_task_definition_id" });
    sys_task_definition.hasMany(wf_task_info, { as: "wf_task_infos", foreignKey: "sys_task_definition_id" });
    account_info.belongsTo(sys_tax_service_level_list, { as: "sys_tax_service_level_list", foreignKey: "sys_tax_service_level_list_id" });
    sys_tax_service_level_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_tax_service_level_list_id" });
    account_info.belongsTo(sys_user_group_list, { as: "sys_user_group_list", foreignKey: "sys_user_group_list_id" });
    sys_user_group_list.hasMany(account_info, { as: "account_infos", foreignKey: "sys_user_group_list_id" });
    agency_form_number.belongsTo(sys_workflow, { as: "notice_type_sys_workflow", foreignKey: "notice_type" });
    sys_workflow.hasMany(agency_form_number, { as: "agency_form_numbers", foreignKey: "notice_type" });
    ocr_archived_document.belongsTo(sys_workflow, { as: "notice_type", foreignKey: "notice_type_id" });
    sys_workflow.hasMany(ocr_archived_document, { as: "ocr_archived_documents", foreignKey: "notice_type_id" });
    ocr_scanned_document.belongsTo(sys_workflow, { as: "notice_type", foreignKey: "notice_type_id" });
    sys_workflow.hasMany(ocr_scanned_document, { as: "ocr_scanned_documents", foreignKey: "notice_type_id" });
    sys_workflow_task.belongsTo(sys_workflow, { as: "sys_workflow", foreignKey: "sys_workflow_id" });
    sys_workflow.hasMany(sys_workflow_task, { as: "sys_workflow_tasks", foreignKey: "sys_workflow_id" });
    wf_info.belongsTo(sys_workflow, { as: "notice_type_sys_workflow", foreignKey: "notice_type" });
    sys_workflow.hasMany(wf_info, { as: "wf_infos", foreignKey: "notice_type" });
    wf_info_new.belongsTo(sys_workflow, { as: "notice_type_sys_workflow", foreignKey: "notice_type" });
    sys_workflow.hasMany(wf_info_new, { as: "wf_info_news", foreignKey: "notice_type" });
    sys_workflow.belongsTo(sys_workflow_type, { as: "sys_workflow_type", foreignKey: "sys_workflow_type_id" });
    sys_workflow_type.hasMany(sys_workflow, { as: "sys_workflows", foreignKey: "sys_workflow_type_id" });
    wf_bulk_notice.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_bulk_notice, { as: "wf_bulk_notices", foreignKey: "wf_info_id" });
    wf_multiple_tax_period.belongsTo(wf_info, { as: "workflow_notice_info", foreignKey: "workflow_notice_info_id" });
    wf_info.hasMany(wf_multiple_tax_period, { as: "wf_multiple_tax_periods", foreignKey: "workflow_notice_info_id" });
    wf_note.belongsTo(wf_info, { as: "workflow_info", foreignKey: "workflow_info_id" });
    wf_info.hasMany(wf_note, { as: "wf_notes", foreignKey: "workflow_info_id" });
    wf_task_abatement.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_abatement, { as: "wf_task_abatements", foreignKey: "wf_info_id" });
    wf_task_amount_due.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_amount_due, { as: "wf_task_amount_dues", foreignKey: "wf_info_id" });
    wf_task_closure.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_closure, { as: "wf_task_closures", foreignKey: "wf_info_id" });
    wf_task_contact.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_contact, { as: "wf_task_contacts", foreignKey: "wf_info_id" });
    wf_task_deposit_refund.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_deposit_refund, { as: "wf_task_deposit_refunds", foreignKey: "wf_info_id" });
    wf_task_detail.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_detail, { as: "wf_task_details", foreignKey: "wf_info_id" });
    wf_task_detail_ar.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_detail_ar, { as: "wf_task_detail_ars", foreignKey: "wf_info_id" });
    wf_task_detail_reg.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_detail_reg, { as: "wf_task_detail_regs", foreignKey: "wf_info_id" });
    wf_task_guidance.belongsTo(wf_info, { as: "workflow_info", foreignKey: "workflow_info_id" });
    wf_info.hasMany(wf_task_guidance, { as: "wf_task_guidances", foreignKey: "workflow_info_id" });
    wf_task_moved_payment_info.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_moved_payment_info, { as: "wf_task_moved_payment_infos", foreignKey: "wf_info_id" });
    wf_task_rate.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_rate, { as: "wf_task_rates", foreignKey: "wf_info_id" });
    wf_task_refund_due.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_refund_due, { as: "wf_task_refund_dues", foreignKey: "wf_info_id" });
    wf_task_research.belongsTo(wf_info, { as: "wf_info", foreignKey: "wf_info_id" });
    wf_info.hasMany(wf_task_research, { as: "wf_task_researches", foreignKey: "wf_info_id" });
    wf_task_guidance.belongsTo(wf_note, { as: "wf_note", foreignKey: "wf_notes_id" });
    wf_note.hasMany(wf_task_guidance, { as: "wf_task_guidances", foreignKey: "wf_notes_id" });
    wf_task_guidance.belongsTo(wf_task_info, { as: "workflow_task_info", foreignKey: "workflow_task_info_id" });
    wf_task_info.hasMany(wf_task_guidance, { as: "wf_task_guidances", foreignKey: "workflow_task_info_id" });
    account_contact_group_linking.belongsTo(workflow_list, { as: "workflow_list", foreignKey: "workflow_list_id" });
    workflow_list.hasMany(account_contact_group_linking, { as: "account_contact_group_linkings", foreignKey: "workflow_list_id" });
    return {
        CMPId: CMPId,
        TEMP_account_contact_detail: TEMP_account_contact_detail,
        TEMP_account_info_detail: TEMP_account_info_detail,
        TEMP_tbl_account_agency_data_detail: TEMP_tbl_account_agency_data_detail,
        TEMP_tbl_account_data_detail: TEMP_tbl_account_data_detail,
        TEMP_tbl_account_data_details_46: TEMP_tbl_account_data_details_46,
        TEMP_tbl_agency_data_detail: TEMP_tbl_agency_data_detail,
        TEMP_tbl_contact_data_detail: TEMP_tbl_contact_data_detail,
        TEMP_tbl_sys_tax_service_level_list: TEMP_tbl_sys_tax_service_level_list,
        account_agency: account_agency,
        account_agency_e_service_login_credential: account_agency_e_service_login_credential,
        account_agency_id_info: account_agency_id_info,
        account_agency_rate: account_agency_rate,
        account_alert_note: account_alert_note,
        account_call_account_contact_info: account_call_account_contact_info,
        account_communication: account_communication,
        account_contact_group_linking: account_contact_group_linking,
        account_contact_info: account_contact_info,
        account_contact_note: account_contact_note,
        account_info: account_info,
        account_location_list: account_location_list,
        account_note: account_note,
        account_reg_contact: account_reg_contact,
        account_usage_type: account_usage_type,
        accounts_data_connectPay: accounts_data_connectPay,
        accounts_data_connectPay_accountid: accounts_data_connectPay_accountid,
        accounts_data_connectPay_datum: accounts_data_connectPay_datum,
        accounts_data_connectPay_name: accounts_data_connectPay_name,
        activity_log: activity_log,
        activity_logs_old: activity_logs_old,
        agency_city: agency_city,
        agency_city_address: agency_city_address,
        agency_city_contact: agency_city_contact,
        agency_city_contact_note: agency_city_contact_note,
        agency_city_link: agency_city_link,
        agency_city_note: agency_city_note,
        agency_country: agency_country,
        agency_department: agency_department,
        agency_department_address: agency_department_address,
        agency_department_contact: agency_department_contact,
        agency_department_contact_note: agency_department_contact_note,
        agency_department_link: agency_department_link,
        agency_department_note: agency_department_note,
        agency_department_vendor: agency_department_vendor,
        agency_deposit_frequency_list: agency_deposit_frequency_list,
        agency_filing_type: agency_filing_type,
        agency_form_keyword_type: agency_form_keyword_type,
        agency_form_number_attribute: agency_form_number_attribute,
        agency_form_number_note: agency_form_number_note,
        agency_form_number_rule: agency_form_number_rule,
        agency_form_number: agency_form_number,
        agency_id_co_detail: agency_id_co_detail,
        agency_id_info: agency_id_info,
        agency_id_type: agency_id_type,
        agency_info: agency_info,
        agency_link_type: agency_link_type,
        agency_local: agency_local,
        agency_local_address: agency_local_address,
        agency_local_collector: agency_local_collector,
        agency_local_collector_address: agency_local_collector_address,
        agency_local_collector_contact: agency_local_collector_contact,
        agency_local_collector_contact_note: agency_local_collector_contact_note,
        agency_local_collector_link: agency_local_collector_link,
        agency_local_collector_note: agency_local_collector_note,
        agency_local_contact: agency_local_contact,
        agency_local_contact_note: agency_local_contact_note,
        agency_local_link: agency_local_link,
        agency_local_note: agency_local_note,
        agency_rate: agency_rate,
        agency_state: agency_state,
        agency_tax_form: agency_tax_form,
        agency_tax_forms_co_setting: agency_tax_forms_co_setting,
        agency_tax_type: agency_tax_type,
        agency_tax_type: agency_tax_type,
        ants_date: ants_date,
        app_avatar: app_avatar,
        app_document: app_document,
        app_industry: app_industry,
        app_report: app_report,
        app_usage_type: app_usage_type,
        app_user_agency_id: app_user_agency_id,
        app_user_agency_info: app_user_agency_info,
        app_user_failed_login_attempt: app_user_failed_login_attempt,
        app_user_info: app_user_info,
        app_user_property: app_user_property,
        app_user_session: app_user_session,
        app_user_view: app_user_view,
        co_agency_filing_type: co_agency_filing_type,
        co_agency_tax_type: co_agency_tax_type,
        co_alert: co_alert,
        co_billing: co_billing,
        co_email: co_email,
        co_hidden_workflow: co_hidden_workflow,
        co_info: co_info,
        co_letter: co_letter,
        co_letters_auto: co_letters_auto,
        co_ocr_sync_setting: co_ocr_sync_setting,
        co_wf_assignment_rule: co_wf_assignment_rule,
        co_wf_options_cc: co_wf_options_cc,
        co_wf_options_letter: co_wf_options_letter,
        data_capture_notice_note: data_capture_notice_note,
        data_capture_review_note: data_capture_review_note,
        data_import_chunk: data_import_chunk,
        data_import_log: data_import_log,
        failed_job: failed_job,
        import_log: import_log,
        linked_wf_note: linked_wf_note,
        mail_alert: mail_alert,
        managed_service_notes_setting: managed_service_notes_setting,
        mastertax_import_log: mastertax_import_log,
        mastertax_setting: mastertax_setting,
        microsoft_setting: microsoft_setting,
        migration: migration,
        oauth_access_token: oauth_access_token,
        oauth_auth_code: oauth_auth_code,
        oauth_client: oauth_client,
        oauth_personal_access_client: oauth_personal_access_client,
        oauth_refresh_token: oauth_refresh_token,
        ocr_archived_document: ocr_archived_document,
        ocr_multiple_tax_period: ocr_multiple_tax_period,
        ocr_scanned_document: ocr_scanned_document,
        poa_info: poa_info,
        security_password_reset: security_password_reset,
        security_role: security_role,
        security_user_activation: security_user_activation,
        sys_csr_list: sys_csr_list,
        sys_difficulty_level: sys_difficulty_level,
        sys_guidance_agency_insight: sys_guidance_agency_insight,
        sys_guidance_info: sys_guidance_info,
        sys_guidance_letter: sys_guidance_letter,
        sys_guidance_note: sys_guidance_note,
        sys_guidance_relevant_tax_auth: sys_guidance_relevant_tax_auth,
        sys_guidance_summary: sys_guidance_summary,
        sys_letter: sys_letter,
        sys_letters_email_property: sys_letters_email_property,
        sys_letters_merge_field: sys_letters_merge_field,
        sys_priority_list: sys_priority_list,
        sys_reg_contact: sys_reg_contact,
        sys_task_definition: sys_task_definition,
        sys_tax_service_level_list: sys_tax_service_level_list,
        sys_user_group_list: sys_user_group_list,
        sys_wf_assignment_rule_type: sys_wf_assignment_rule_type,
        sys_workflow: sys_workflow,
        sys_workflow_task: sys_workflow_task,
        sys_workflow_type: sys_workflow_type,
        temp_account_agency: temp_account_agency,
        temp_account_contact_info: temp_account_contact_info,
        temp_account_info: temp_account_info,
        token: token,
        user_agency_filing_type: user_agency_filing_type,
        user_agency_tax_type: user_agency_tax_type,
        wf_alert: wf_alert,
        wf_bulk_notice: wf_bulk_notice,
        wf_communication: wf_communication,
        wf_info: wf_info,
        wf_info_new: wf_info_new,
        wf_linking: wf_linking,
        wf_multiple_tax_period: wf_multiple_tax_period,
        wf_note: wf_note,
        wf_round_robin_assignment: wf_round_robin_assignment,
        wf_task_abatement: wf_task_abatement,
        wf_task_agency_follow_up: wf_task_agency_follow_up,
        wf_task_amount_due: wf_task_amount_due,
        wf_task_closure: wf_task_closure,
        wf_task_contact: wf_task_contact,
        wf_task_deposit_refund: wf_task_deposit_refund,
        wf_task_detail: wf_task_detail,
        wf_task_detail_ar: wf_task_detail_ar,
        wf_task_detail_reg: wf_task_detail_reg,
        wf_task_guidance: wf_task_guidance,
        wf_task_info: wf_task_info,
        wf_task_moved_payment_info: wf_task_moved_payment_info,
        wf_task_rate: wf_task_rate,
        wf_task_refund_due: wf_task_refund_due,
        wf_task_research: wf_task_research,
        wf_task_round_robin_assignment: wf_task_round_robin_assignment,
        workflow_list: workflow_list,
        yardi_setting: yardi_setting,
        zendesk_setting: zendesk_setting,
    };
}
exports.initModels = initModels;
