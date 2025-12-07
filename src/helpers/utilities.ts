import {
  allAchievements,
  allProfessionalExperiences,
  IsoDateTimeString,
  personal,
} from '@content';
import { ClassValue } from 'class-variance-authority/types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const fullName = `${personal.givenName} ${personal.familyName}`;

export const initials = `${personal.givenName.slice(0, 1)}${personal.familyName.slice(0, 1)}`;

export function sortedProfessionalExperiences(): typeof allProfessionalExperiences {
  return allProfessionalExperiences.toSorted((a, b) => {
    const startDateA = new Date(a.startDate).getTime();
    const startDateB = new Date(b.startDate).getTime();

    return startDateB - startDateA;
  });
}

export const sortedAchievements = allAchievements.toSorted((a, b) => {
  return Number(b.completionYear) - Number(a.completionYear);
});

export function getFormattedDate(dateTimeString: IsoDateTimeString): string {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString(undefined, {
    month: 'short',
    year: 'numeric',
  });
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
