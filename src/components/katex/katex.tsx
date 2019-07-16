import { Component, Prop, h, Watch } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

import { KatexExpressionError } from './katex-expression-error';

import katex from 'katex';

@Component({
  tag: 'katex-expression',
  styleUrl: 'katex.css',
  shadow: false,
})
export class KatexExpression
{

  /**
   * [el html element containing the rendered expression]
   * @type {[type]}
   */
  el: HTMLElement;

  /**
   * katex expression to render
   */
  @Prop() expression: string;

  /**
   * Katex options json
   */
  @Prop() katexOptions: string;

  /**
   * Emits Error object on exception
   */
  @Event() onError: EventEmitter;


  options: Object; 

  @Watch('katex-options')
  katexOptionsChanged(value: string)
  {
    if(!value) {
      return;
    }

    try {
        this.options = JSON.parse(value);
    } catch (error) {
        this.onError.emit(new KatexExpressionError('Invalid json katexOptions'));
    }
  }

  /**
   * [renderExpression katex render the expression]
   */
  private renderExpression()
  {
    // ensure that the element is rendered (i.e., didRender())
    if(this.el) {
      try {
        katex.render(this.expression, this.el, {
          ...this.options,
        });
      } catch (err) {
        this.onError.emit(err);
      }
    }
  }


  /**
   * Lifecyle method, parse options when initialized
   */
  componentWillLoad()
  {
    this.katexOptionsChanged(this.katexOptions);
  }

  /**
   * Lifecyle method
   */
  componentDidRender()
  {
    // katex render the expression after its loaded
    this.renderExpression();
  }

  /**
   * Lifecyle method
   */
  componentWillUpdate()
  {
    // katex render the expression after its updated
    this.renderExpression();
  }

  /**
   * Main render
   */
  render() 
  {
    return <span ref={(el) => this.el = el as HTMLElement}></span>;
  }

}
