import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

import RegistrationValidator from '@vitspot/vit-registration-number';

/**
 * Validator for Registration Number as a decorator
 */
@ValidatorConstraint({ name: 'RegistrationNumber', async: false })
export class RegistrationNumber implements ValidatorConstraintInterface {
  validate(reg: string) {
    try {
      const instance = new RegistrationValidator(reg);
      return instance !== undefined;
    } catch (e) {
      return false;
    }
  }

  defaultMessage() {
    return 'Invalid Registration Nuber';
  }
}
