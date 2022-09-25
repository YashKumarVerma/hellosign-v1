import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

/**
 * Validator for Strings containing scope strings
 */
@ValidatorConstraint({ name: 'ApplicationScopes', async: false })
export class ApplicationScopes implements ValidatorConstraintInterface {
  validate(scopes: string) {
    try {
      const validScopes = ['name', 'registrationNumber', 'github', 'twitter', 'linkedIn', 'previousEvents'];
      const decodedString = decodeURI(scopes);
      decodedString.split(' ').forEach((str) => {
        if (!validScopes.includes(str)) {
          throw new Error('invalid scope');
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  defaultMessage() {
    return 'Invalid application scopes';
  }
}
