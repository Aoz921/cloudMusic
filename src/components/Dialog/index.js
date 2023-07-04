import Dialog from './Dialog.vue';
Dialog.install = function(V){
    V.component(this.name,this);
}
export default Dialog;