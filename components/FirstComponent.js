import { h1, p, select, input, div, list } from '../src/html.js';

export default function FirstComponent(props){ 
  return(
    div({ 
      content: [
        h1({content: props.title}),
        p({content: props.content}),
        select({
          options: [
            {value: "volvo", content: "Volvo"},
            {value: "bmw", content: "BMW"},
          ]
        }),
        input({
          type: "text",
          place_holder: "Tai doido",
          disabled: true
        }),
        list({
          orderly: true,
          options: [
            {id: "bmw", content: "BMW"},
            {id: "mercedez", content: "AMG", disabled: true},
          ]
        }),
        list({
          options: [
            {id: "bmw", content: "BMW"},
            {id: "mercedez", content: "AMG", disabled: true},
          ]
        })
      ]
    })
  )
};
