const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    private hudImg:cc.Sprite = null;

    @property(cc.Label)
    private hudLabel:cc.Label = null;

    protected start(): void {
        this.hudImg.fillRange = 1;
    }
}
