import { storiesOf, addDecorator} from '@storybook/angular';
import {text} from '@storybook/addon-knobs/angular';
import {MatCardModule, MatButtonModule, MatProgressBarModule, MatChipsModule } from '@angular/material';
import { CardComponent } from '../cards/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertModule } from 'ngx-bootstrap';
// import { object } from '@storybook/addon-knobs';

storiesOf('Card', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-card>{{label}}</mat-card>
    </div>
    `,
    props: {
      label: text('label', 'A simple card')
    },
    moduleMetadata: {
      imports: [MatCardModule]
    }
  }))
  .add('Complex', () => ({
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    props: {
      type: 'Course',
      title: 'Anderson Algebra 1A',
      current: 89,
      course: 90,
    },
    moduleMetadata: {
      imports: [MatCardModule, MatButtonModule, MatProgressBarModule, MatChipsModule]
    }
  }))
