class Road{
    constructor(x,width,LaneCount=3){
        this.x=x;
        this.width=width;
        this.LaneCount=LaneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000
        this.top=-infinity
        this.bottom=infinity
    }
    getLaneCenter(LaneIndex){
        const LaneWidth=this.width/this.LaneCount;
        return this.left+LaneWidth/2+
           Math.min(LaneIndex*Lane
    }

    draw(ctx) {
        ctx.LineWidth = 5;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.LaneCount; i++) {
            const x = Lerp(
                this.left,
                this.right,
                i / this.LaneCount
            );
            if(i>0 && i<this.LaneCount){
                ctx.setLineDash([20,20]);
            }else{
                ctx.setLineDash([]);
            }
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom)
            ctx.stroke();

        }
    }
}

