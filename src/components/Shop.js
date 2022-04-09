import Item from "./Item";

import WRX from '../media/Bunta_Impreza_Fourth_Stage.webp';
import AE86 from '../media/Fifth_Stage_Eight-Six.webp';
import FD from '../media/Keisuke_FD3S_Fifth_Stage_Upgraded.webp';
import FC from '../media/Ryosuke_FC3S_Third_Stage.webp';
import R32 from '../media/Nakazato_R32_New_Initial_D.webp';
import SilEighty from '../media/SilEighty_Extra_Stage_2.webp';
import S2000 from '../media/Joshima_S2000_Fourth_Stage.webp';
import EVO3 from '../media/Kyoichi_Evo_III_Final_Stage.webp';
import EVO7 from '../media/Team_246_Lan_EVO_VII_Ingame.webp';
import MR2 from '../media/Kogashiwa_MR2_Third_Stage.webp';

const item = [
    { name: "Subaru Impreza WRX STi", image: WRX, price: 29999 },
    { name: "Toyota Corolla AE86", image: AE86 },
    { name: "Mazda RX-7 FD3S", image: FD },
    { name: "Mazda RX-7 FC3S", image: FC },
    { name: "Nissan Skyline GT-R R32", image: R32 },
    { name: "Nissan SilEighty RPS13", image: SilEighty },
    { name: "Honda S2000", image: S2000 },
    { name: "Mitsubishi Lancer Evolution III", image: EVO3 },
    { name: "Mitsubishi Lancer Evolution VII", image: EVO7 },
    { name: "Toyota MR2", image: MR2 }
]

function Shop() {
    return (
        <div>
            <h1>Shop Page</h1>
            <Item item={item[0]} />
        </div>
    );
}

export default Shop;
