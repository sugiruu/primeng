import { Code } from '@/domain/code';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'loader-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Busy state is enabled by adding <i>showLoader</i> property which blocks the UI with a modal by default. Alternatively, <i>loader</i> template can be used to customize items e.g. with <a href="/skeleton" class="">Skeleton</a>.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-center gap-4">
            <div>
                <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
                    <ng-template #item let-item let-options="options">
                        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                            {{ item }}
                        </div>
                    </ng-template>
                </p-virtualscroller>
            </div>
            <div>
                <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
                    <ng-template #item let-item let-options="options">
                        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                            {{ item }}
                        </div>
                    </ng-template>
                    <ng-template pTemplate="loader" let-options="options">
                        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                            <p-skeleton [width]="options.even ? '60%' : '50%'" height="1.3rem"></p-skeleton>
                        </div>
                    </ng-template>
                </p-virtualscroller>
            </div>
        </div>
        <app-code [code]="code" selector="scroller-loader-demo"></app-code>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderDoc {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    }

    code: Code = {
        basic: `<p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

 <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
    <ng-template pTemplate="loader" let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            <p-skeleton [width]="options.even ? '60%' : '50%'" height="1.3rem"></p-skeleton>
        </div>
    </ng-template>
</p-virtualscroller>`,

        html: `<div class="card flex flex-wrap justify-center gap-4">
    <div>
        <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
            <ng-template #item let-item let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
        </p-virtualscroller>
    </div>
    <div>
        <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
            <ng-template #item let-item let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
            <ng-template pTemplate="loader" let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    <p-skeleton [width]="options.even ? '60%' : '50%'" height="1.3rem"></p-skeleton>
                </div>
            </ng-template>
        </p-virtualscroller>
    </div>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
    selector: 'scroller-loader-demo',
    templateUrl: './scroller-loader-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }

            p-skeleton {
                width: 100%;
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerLoaderDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,
        scss: `
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }

    p-skeleton {
        width: 100%;
    }
}`
    };
}
