import {Vue,Component} from 'vue-property-decorator';

@Component
export default class HeaderComponent extends Vue{
    beforeCreate() {
        console.log("hello");
           
    }
}