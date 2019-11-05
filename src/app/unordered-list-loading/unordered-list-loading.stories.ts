import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
// import { of } from 'rxjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { object } from '@storybook/addon-knobs';
import { UnorderedListLoadingComponent } from '../unordered-list-loading/unordered-list-loading.component';

storiesOf('Unordered List', module)
    .addDecorator(
        moduleMetadata({
            declarations: [
                UnorderedListLoadingComponent
            ],
            imports: [
                FlexLayoutModule
            ],
        }),
    ).add('data table loading', () => {
      return {
          component: UnorderedListLoadingComponent,
          props: {
              text: 'Test',
              className: ['datatable-list-item'],
              labels: ['Label One', 'Label Two', 'Label Three'],
              examples: ['Item One', 'Item Two', 'Item Three'],
          },
        };
    });
