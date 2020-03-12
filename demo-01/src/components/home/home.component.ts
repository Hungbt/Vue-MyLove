import {Vue,Component} from 'vue-property-decorator';

@Component
export default class HomeComponent extends Vue{
    test(){
        console.log("hello word");
        
    }
}