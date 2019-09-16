<script>
import Section from './Section.vue';
import Question from './Question.vue';

export default {
  name: 'ItemsWrapper',
  functional: true,

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    parent: {
      type: String,
      default: '',
    },
  },

  render(createElement, { props, listeners }) {
    function pickComponent() {
      switch (props.item.type) {
        case 'section':
          return Section;
        default:
          return Question;
      }
    }

    return createElement(
      pickComponent(), { props, listeners, on: listeners },
    );
  },
};
</script>
