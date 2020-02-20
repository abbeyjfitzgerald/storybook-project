import { storiesOf, addDecorator} from '@storybook/angular';
import {text} from '@storybook/addon-knobs/angular';
import {MatCardModule, MatButtonModule, MatProgressBarModule} from '@angular/material';
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
          <mat-card-subtitle>Course</mat-card-subtitle>
          <div mat-card-avatar><i class="material-icons">description</i></div>
        </mat-card-header>
        <mat-card-content>
          <mat-card-title>Anderson Algebra 1A</mat-card-title>
          <p>Current Grade: 90%</p>
          <p>Course Grade: 42%</p>
        </mat-card-content>
        <mat-progress-bar></mat-progress-bar>
      </mat-card>
    </div>
    `,
    moduleMetadata: {
      imports: [MatCardModule, MatButtonModule, MatProgressBarModule]
    }
  }))
