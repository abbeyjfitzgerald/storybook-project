import { storiesOf, moduleMetadata, addDecorator, addParameters } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { FlexLayoutModule } from '@angular/flex-layout';
import { object } from '@storybook/addon-knobs';
import { WelcomeComponent } from '../welcome/welcome.component';
import * as markdown from '../notes/button.notes.md';

storiesOf('WelcomeComponent', module)
    .addDecorator(
        moduleMetadata({
            declarations: [
                WelcomeComponent
            ],
            imports: [
                FlexLayoutModule
            ],
        }),
    ).add('welcome', () => {
      return {
          component: WelcomeComponent,

        };
    },{
      notes: { markdown }
});
