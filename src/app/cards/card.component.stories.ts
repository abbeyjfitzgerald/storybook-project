import { storiesOf, addDecorator} from '@storybook/angular';
import {text} from '@storybook/addon-knobs/angular';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    template: `
    <div>
      <mat-card style="width: 400px; margin: 0 auto;">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"><i class="material-icons">description</i></div>
          <mat-card-subtitle>Course</mat-card-subtitle>
          <mat-card-title>Anderson Algebra 1A</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Current Grade: 90%</p>
          <p>Course Grade: 42%</p>
        </mat-card-content>
      </mat-card>
    </div>
    `,
    moduleMetadata: {
      imports: [MatCardModule, MatButtonModule]
    }
  }))
