import { USER_ROLES } from "./constants";

const getUserRoleId = (role) => {
  switch (role) {
    case USER_ROLES.SUPER_ADMIN:
      return 1;
    case USER_ROLES.ADMIN:
      return 2;
    case USER_ROLES.EXECUTIVE:
      return 3;
    case USER_ROLES.OPERATOR:
      return 4;
    case USER_ROLES.RESELLER:
      return 5;
    default:
      return -1;
  }
};

export default getUserRoleId;
