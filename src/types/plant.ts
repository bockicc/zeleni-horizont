import type { CategoryId } from './category';

export interface CareInstructions {
  readonly sun: string;
  readonly watering: string;
  readonly soil: string;
  readonly planting: string;
  readonly hardiness: string;
}

export interface Plant {
  readonly id: string;
  readonly name: string;
  readonly latinName: string;
  readonly categoryId: CategoryId;
  readonly image: string;
  readonly priceRsd: number;
  readonly oldPriceRsd?: number;
  readonly height: string;
  readonly potSize: string;
  readonly shortDescription: string;
  readonly care: CareInstructions;
  readonly badge?: 'Novo' | 'Akcija';
}
