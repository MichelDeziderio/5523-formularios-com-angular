// investments-split.service.ts
import { Injectable } from '@angular/core';

export type AllocationRow = {
  investmentId: string;
  percent: number;
};

export type PersistedAllocation = {
  totalValue: number;
  rows: AllocationRow[];
};

@Injectable({ providedIn: 'root' })
export class InvestmentsSplitService {
  private readonly KEY = 'alura_invest_split_v1';

  save(data: PersistedAllocation) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  load(): PersistedAllocation | null {
    const raw = localStorage.getItem(this.KEY);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw) as PersistedAllocation;
      return {
        totalValue: Number(parsed.totalValue ?? 0),
        rows: Array.isArray(parsed.rows)
          ? parsed.rows.map((r) => ({
              investmentId: String(r.investmentId ?? ''),
              percent: Number(r.percent ?? 0),
            }))
          : [],
      };
    } catch {
      return null;
    }
  }

  clear() {
    localStorage.removeItem(this.KEY);
  }
}
