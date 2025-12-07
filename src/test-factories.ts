import type {
  Achievement,
  Personal,
  PrivateField,
  ProfessionalExperience,
  Salary,
} from '@content';

/**
 * Factory function to create mock Achievement objects for testing
 */
export function createMockAchievement(
  overrides: Partial<Achievement> = {},
): Achievement {
  return {
    _id: 'achievements/degree.md',
    _raw: {
      sourceFilePath: 'achievements/degree.md',
      sourceFileName: 'degree.md',
      sourceFileDir: 'achievements',
      contentType: 'markdown',
      flattenedPath: 'achievements/degree',
    },
    type: 'Achievement',
    achievement: 'Bachelor of Science in Computer Science',
    organization: 'University of Technology',
    completionYear: 2020,
    body: {
      raw: 'Graduated with honors, focusing on software engineering and algorithms.',
      html: '<p>Graduated with honors, focusing on software engineering and algorithms.</p>',
    },
    ...overrides,
  };
}

/**
 * Factory function to create mock ProfessionalExperience objects for testing
 */
export function createMockProfessionalExperience(
  overrides: Partial<ProfessionalExperience> = {},
): ProfessionalExperience {
  return {
    _id: 'professional-experiences/company-a.md',
    _raw: {
      sourceFilePath: 'professional-experiences/company-a.md',
      sourceFileName: 'company-a.md',
      sourceFileDir: 'professional-experiences',
      contentType: 'markdown',
      flattenedPath: 'professional-experiences/company-a',
    },
    type: 'ProfessionalExperience',
    title: 'Software Engineer',
    organization: 'Tech Company A',
    startDate: '2020-01-01',
    endDate: undefined,
    body: {
      raw: 'Built scalable microservices using Node.js and TypeScript.',
      html: '<p>Built scalable microservices using Node.js and TypeScript.</p>',
    },
    ...overrides,
  };
}

/**
 * Factory function to create mock Salary objects for testing
 */
export function createMockSalary(overrides: Partial<Salary> = {}): Salary {
  return {
    currentSalary: '$100,000',
    desiredSalary: '$120,000',
    _id: 'salary.md',
    _raw: {
      sourceFilePath: 'salary.md',
      sourceFileName: 'salary.md',
      sourceFileDir: '.',
      contentType: 'markdown',
      flattenedPath: 'salary',
    },
    type: 'Salary',
    body: {
      raw: '',
      html: '',
    },
    ...overrides,
  };
}

/**
 * Factory function to create mock PrivateField objects for testing
 */
function createMockPrivateField(
  overrides: Partial<PrivateField> = {},
): PrivateField {
  return {
    _id: 'private-fields/email.md',
    _raw: {
      sourceFilePath: 'private-fields/email.md',
      sourceFileName: 'email.md',
      sourceFileDir: 'private-fields',
      contentType: 'markdown',
      flattenedPath: 'private-fields/email',
    },
    type: 'PrivateField',
    label: 'Email:',
    body: {
      raw: 'test@example.com',
      html: '<p>test@example.com</p>',
    },
    ...overrides,
  };
}

/**
 * Factory function to create mock Personal objects for testing
 */
function createMockPersonal(
  overrides: Partial<Personal> = {},
): Personal {
  return {
    _id: 'personal.md',
    _raw: {
      sourceFilePath: 'personal.md',
      sourceFileName: 'personal.md',
      sourceFileDir: '.',
      contentType: 'markdown',
      flattenedPath: 'personal',
    },
    type: 'Personal',
    givenName: 'Test',
    familyName: 'User',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    linkedInUrl: 'https://linkedin.com/in/testuser',
    githubUrl: 'https://github.com/testuser',
    body: {
      raw: 'This is test personal information.',
      html: '<p>This is test personal information.</p>',
    },
    ...overrides,
  };
}

/**
 * Pre-configured mock data sets for common test scenarios
 */
export const mockData = {
  achievements: {
    certification: createMockAchievement({
      _id: 'achievements/certification.md',
      achievement: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      completionYear: 2023,
      body: {
        raw: 'Professional certification',
        html: '<p>Professional certification</p>',
      },
    }),
    degree: createMockAchievement(),
  },
  professionalExperiences: {
    companyA: createMockProfessionalExperience(),
    companyB: createMockProfessionalExperience({
      _id: 'professional-experiences/company-b.md',
      _raw: {
        sourceFilePath: 'professional-experiences/company-b.md',
        sourceFileName: 'company-b.md',
        sourceFileDir: 'professional-experiences',
        contentType: 'markdown',
        flattenedPath: 'professional-experiences/company-b',
      },
      organization: 'Tech Company B',
      title: 'Senior Developer',
      startDate: '2021-01-01',
      endDate: undefined,
      body: {
        raw: 'Worked on various frontend projects.',
        html: '<p>Worked on various frontend projects.</p>',
      },
    }),
  },
  privateFields: {
    email: createMockPrivateField(),
    phone: createMockPrivateField({
      _id: 'private-fields/phone.md',
      _raw: {
        sourceFilePath: 'private-fields/phone.md',
        sourceFileName: 'phone.md',
        sourceFileDir: 'private-fields',
        contentType: 'markdown',
        flattenedPath: 'private-fields/phone',
      },
      label: 'Phone:',
      body: {
        raw: '(555) 123-4567',
        html: '<p>(555) 123-4567</p>',
      },
    }),
  },
  salary: createMockSalary(),
};

/**
 * Helper utilities for creating mock module return values
 */
export const mockHelpers = {
  utilities: {
    cn: (classes: string): string => classes,
    fullName: 'Test User',
    initials: 'TU',
    getFormattedDate: (date: string): string => date,
  },
};
