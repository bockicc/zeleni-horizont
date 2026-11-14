import React from 'react';
import { CloudSun, Droplets, Shovel, CalendarDays, Snowflake } from 'lucide-react';
import type { CareInstructions as CareInstructionsType } from '../../types';

interface CareInstructionsProps {
  readonly care: CareInstructionsType;
}

export function CareInstructions({ care }: CareInstructionsProps): React.JSX.Element {
  const items = [
    { icon: CloudSun, label: 'Sunčeva svetlost', value: care.sun },
    { icon: Droplets, label: 'Zalivanje', value: care.watering },
    { icon: Shovel, label: 'Zemljište', value: care.soil },
    { icon: CalendarDays, label: 'Sezona sadnje', value: care.planting },
    { icon: Snowflake, label: 'Otpornost na mraz', value: care.hardiness },
  ] as const;

  return (
    <div>
      <h4 className="text-lg font-semibold text-forest-dark">Uputstvo za sadnju i negu</h4>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="rounded-xl border border-sage-200 bg-sage-50/60 p-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-forest">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.value}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
