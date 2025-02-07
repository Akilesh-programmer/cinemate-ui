import { Card } from "./Card";
import One from "../assets/movie_images/1.jpg";
import Two from "../assets/movie_images/2.jpg";
import Three from "../assets/movie_images/3.jpg";
import Four from "../assets/movie_images/4.jpg";
import Five from "../assets/movie_images/5.jpg";
import Six from "../assets/movie_images/6.jpg";

export const Content = () => {
    const p1 = "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet."
    const p2 = "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared."
    const p3 = "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.";
    const p4 = "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum.";
    const p5 = "To stop an arms dealer from unleashing a deadly superweapon, Ace sniper Brandon Beckett and Agent Zero are deployed to Costa Verde to lead a group of elite soldiers against an unrelenting militia. Taking an untested sniper under his wing, Beckett faces his newest challenge: giving orders instead of receiving them. With both time and ammo running low in a race to save humanity, the team must overcome all odds just to survive.";
    const p6 = "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much younger intern.";

    return (
        <div 
        className="flex flex-wrap">
            <Card image={One} title="Sonic the Hedgehog 3" description={p1} />
            <Card image={Two} title="Kraven the Hunter" description={p2} />
            <Card image={Three} title="Back in Action" description={p3}/>
            <Card image={Four} title="Alarum" description={p4}/>
            <Card image={Five} title="Sniper: The Last Stand" description={p5}/>
            <Card image={Six} title="Babygirl" description={p6}/>
        </div>
        
    )
}
