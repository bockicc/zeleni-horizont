export type CategoryId = 'cetinari' | 'liscari' | 'cvetnice' | 'vocne';

export interface Category {
  readonly id: CategoryId;
  readonly name: string;
  readonly description: string;
  readonly image: string;
}
