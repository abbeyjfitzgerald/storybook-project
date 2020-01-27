import { storiesOf, moduleMetadata, addDecorator, addParameters } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { FlexLayoutModule } from '@angular/flex-layout';
import { object } from '@storybook/addon-knobs';
import { WorkCardComponent } from '../work-cards/work-card.component';
import * as markdown from '../notes/button.notes.md';

storiesOf('WorkCardComponent', module)
    .addDecorator(
        moduleMetadata({
            declarations: [
                WorkCardComponent
            ],
            imports: [
                FlexLayoutModule
            ],
        }),
    ).add('work card', () => {
      return {
          component: WorkCardComponent,
          props: {
              className: ['work-card--xp'],
              category: ['course'],
              message: ['trophies earned'],
              score: ['90'],
              courseScore: ['42']
          },
        };
    },{
      notes: { markdown }
    });
