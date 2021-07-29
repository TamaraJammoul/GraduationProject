import { Injectable } from '@angular/core';
import { UserClaims } from '@libs/core/models/user-claims.model';
import { RolesEnum } from '@libs/core/models/enumerations/roles.enum';
import { FeaturesEnum } from '@libs/core/models/enumerations/features.enum';
import { PermissionEnum } from '@libs/core/models/enumerations/permissions.enum';
import { Rules } from '@libs/core/models/enumerations/rules.enum';
import { BaseListingItem } from '@libs/shared/models/base-listing-item.models';

@Injectable({
    providedIn: 'root',
})

export class SecurityCheckerService {

    private userClaims: UserClaims;
    private OperatingIntermediary: BaseListingItem;
    private superAdminRole = RolesEnum.AccountManager;
    private ruleMap: { [key: string]: boolean } = {};
    constructor() { }

    setUserClaims(userClaims: UserClaims) {
        this.userClaims = userClaims;
        this.generateUserRuleMap();
    }

    setOperatingIntermediary(OperatingIntermediary: BaseListingItem) {
        this.OperatingIntermediary = OperatingIntermediary;
    }

    generateUserRuleMap() {
        this.ruleMap = {
            [Rules.CanActivateVenue.toString()]: this.hasPermission(PermissionEnum.VenueAddition),
            [Rules.CanAddVenue.toString()]: this.hasPermission(PermissionEnum.VenueActivation),
            [Rules.CanManageBooking.toString()]: this.hasRole(RolesEnum.BookingManager),
            [Rules.CanManageCompanyInfo.toString()]: this.hasRole(RolesEnum.CompanyInfoManager),
            [Rules.CanManageEmployee.toString()]: this.hasRole(RolesEnum.EmployeesManager),
            [Rules.CanManageVenues.toString()]: this.hasRole(RolesEnum.ContentManager),
            [Rules.CanManagePeople.toString()]: this.hasRole(RolesEnum.AccountsManager)
        };
    }

    canUser(rule: Rules) {
        if (!rule || rule.length === 0) {
            return true;
        }
        return Object.keys(this.ruleMap).includes(rule) && this.ruleMap[rule];
    }

    hasFeature(feature: FeaturesEnum) {
        if (this.isSuperAdmin() || this.doesUserHasFeature(feature)) {
            return true;
        }
        return false;
    }

    hasRole(role: RolesEnum): boolean {
        if (this.isSuperAdmin() || this.doesUserHasRole(role)) {
            return true;
        }
        return false;
    }

    hasPermission(permission: PermissionEnum) {
        if (this.isSuperAdmin() || this.doesUserHasPermission(permission)) {
            return true;
        }
        return false;
    }

    isSuperAdmin(): boolean {
        return this.userClaims.roles.includes(this.superAdminRole);
    }

    doesUserHasFeature(feature: FeaturesEnum) {
        return this.userClaims.features.includes(feature);
    }

    doesUserHasRole(role: RolesEnum) {
        return this.userClaims.roles.includes(role);
    }

    doesUserHasPermission(permission: PermissionEnum) {
        return this.userClaims?.permissions?.includes(permission);
    }

    isUserCustomer() {
        return this.OperatingIntermediary ? true : false;
    }

}
