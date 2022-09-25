export const SCOPE = {
  name: { display: 'Full Name', id: 'name' },
  registrationNumber: { display: 'Registration Number', id: 'registrationNumber' },
  // github: { display: 'Github Username', id: 'github' },
  // twitter: { display: 'Twitter Username', id: 'twitter' },
  // linkedIn: { display: 'LinkedIn ID', id: 'linkedIn' },
  // previousEvents: { display: 'Previous Events you have participated', id: 'previousEvents' },
};

export const scopeMapper = (givenScope: string): string => {
  for (const [, value] of Object.entries(SCOPE)) {
    if (value.id === givenScope) {
      return value.display;
    }
  }

  return 'Document Sign In';
};
