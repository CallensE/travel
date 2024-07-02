import { inject } from "@angular/core";
import { AsyncValidatorFn } from "@angular/forms";
import { PackingListItemService } from "../services/packing-list-item.service";
import { map } from "rxjs";

export function uniqueItem(): AsyncValidatorFn {
    const service = inject(PackingListItemService);
    return (control) => {
        const item = control.value;
        return service.getByItem(item).pipe(map(items => items.length > 0 ? { uniqueItem: item } : null));
    };
}