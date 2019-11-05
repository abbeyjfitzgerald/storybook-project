import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
// import { of } from 'rxjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { object } from '@storybook/addon-knobs';
import { UnorderedListComponent } from '../unordered-list/unordered-list.component';
// import { withNotes } from '@storybook/addon-notes';

storiesOf('Unordered List', module)
    .addDecorator(
        moduleMetadata({
            declarations: [
                UnorderedListComponent
            ],
            imports: [
                FlexLayoutModule
            ],
        }),
    ).add('data table', () => {
      return {
          component: UnorderedListComponent,
          props: {
              className: ['datatable-list-item'],
              text: 'Test',
              labels: ['Label One', 'Label Two', 'Label Three'],
              examples: ['Item One', 'Item Two', 'Item Three']
          },
        };
    },
    {
      notes: 'Databable Notes'
    }
  );
