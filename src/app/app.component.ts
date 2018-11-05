import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Paragraph development begins with the formulation of the controlling idea. This idea directs the paragraph’s development. Often, the controlling idea of a paragraph will appear in the form of a topic sentence. In some cases, you may need more than one sentence to express a paragraph’s controlling idea.',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Paragraph development continues with an expression of the rationale or the explanation that the writer gives for how the reader should interpret the information presented in the idea statement or topic sentence of the paragraph. The writer explains his/her thinking about the main topic, idea, or focus of the paragraph.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Paragraph development progresses with the expression of some type of support or evidence for the idea and the explanation that came before it. The example serves as a sign or representation of the relationship established in the idea and explanation portions of the paragraph.',
      loveIts: 0,
      created_at: new Date()
    },
  ];


  onLike(post) {
     post.loveIts++;
    }

    onDislike (post) {
     post.loveIts--;
    }
 }
