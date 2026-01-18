const {ccclass, property} = cc._decorator;

@ccclass
export default class HUDUI extends cc.Component {

    public static Instance:HUDUI = null;

    // 最大弹药数量
    private m_maxAmmo = 12;

    @property(cc.Sprite)
    private hudImg:cc.Sprite = null;

    @property(cc.Label)
    private hudLabel:cc.Label = null;

    protected onLoad(): void {
        if (HUDUI.Instance == null) {
            HUDUI.Instance = this;
            this.updateAmmo(this.m_maxAmmo);
        }
    }

    protected start(): void {
        this.hudImg.fillRange = 1;
    }

    public setMaxAmmo(num:number) {
        this.m_maxAmmo = num;
    }

    public updateAmmo(num:number) {
        const usedAmmo = this.m_maxAmmo - num;
        const newAmmoCount = num;
        
        this.hudImg.fillRange = newAmmoCount / this.m_maxAmmo;
        this.hudLabel.string = `剩余弹药: ${newAmmoCount}/${this.m_maxAmmo}`;
    }
}
