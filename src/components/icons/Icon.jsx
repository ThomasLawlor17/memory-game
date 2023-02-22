import AntmanIcon from './marvel/Antman'
import ArcReactorIcon from './marvel/ArcReactor'
import AvengersIcon from './marvel/Avengers'
import BlackPantherIcon from './marvel/BlackPanther'
import CptAmericaIcon from './marvel/CptAmerica'
import CptMarvelIcon from './marvel/CptMarvel'
import GauntletIcon from './marvel/Gauntlet'
import GrootIcon from './marvel/Groot'
import HawkeyeIcon from './marvel/Hawkeye'
import HulkIcon from './marvel/Hulk'
import IronmanIcon from './marvel/Ironman'
import LokiIcon from './marvel/Loki'
import ScepterIcon from './marvel/Scepter'
import ShieldIcon from './marvel/Shield'
import SpidermanIcon from './marvel/Spiderman'
import StormbreakerIcon from './marvel/Stormbreaker'
import ThanosIcon from './marvel/Thanos'
import WidowIcon from './marvel/Widow'
import XmenIcon from './marvel/Xmen'
import AstronautIcon from './space/Astronaut'
import AtomIcon from './space/Atom'
import BlackHoleIcon from './space/BlackHole'
import EagleIcon from './space/Eagle'
import GalaxyIcon from './space/Galaxy'
import InvaderIcon from './space/Invader'
import IssIcon from './space/Iss'
import MeteorIcon from './space/Meteor'
import PlanetIcon from './space/Planet'
import RadarIcon from './space/Radar'
import RocketIcon from './space/Rocket'
import RoverIcon from './space/Rover'
import SatelliteIcon from './space/Satellite'
import SolarSystemIcon from './space/SolarSystem'
import SputnikIcon from './space/Sputnik'
import StationIcon from './space/Station'
import TelescopeIcon from './space/Telescope'
import UfoIcon from './space/Ufo'
import BadmintonIcon from './sports/Badminton'
import BaseballIcon from './sports/Baseball'
import BasketballIcon from './sports/Basketball'
import BikeIcon from './sports/Bike'
import BowlingIcon from './sports/Bowling'
import BoxingIcon from './sports/Boxing'
import CricketIcon from './sports/Cricket'
import FootballIcon from './sports/Football'
import FormulaIcon from './sports/Formula'
import GolfIcon from './sports/Golf'
import KyakIcon from './sports/Kyak'
import PoolIcon from './sports/Pool'
import PuckIcon from './sports/Puck'
import SoccerIcon from './sports/Soccer'
import TableTennisIcon from './sports/TableTennis'
import TennisIcon from './sports/Tennis'
import TrophyIcon from './sports/Trophy'
import VolleyballIcon from './sports/Volleyball'
import AtatIcon from './starwars/Atat'
import BobaFettIcon from './starwars/BobaFett'
import C3poIcon from './starwars/C3po'
import CheweyIcon from './starwars/Chewey'
import DeathstarIcon from './starwars/Deathstar'
import EmpireIcon from './starwars/Empire'
import LeahIcon from './starwars/Leah'
import LogoIcon from './starwars/Logo'
import MFalconIcon from './starwars/MFalcon'
import PilotIcon from './starwars/Pilot'
import R2Icon from './starwars/R2'
import RebelsIcon from './starwars/Rebels'
import SaberIcon from './starwars/Saber'
import TieIcon from './starwars/Tie'
import TrooperIcon from './starwars/Trooper'
import VaderIcon from './starwars/Vader'
import XwingIcon from './starwars/Xwing'
import YodaIcon from './starwars/Yoda'

const Icon = ({name}) => {
    switch(name) {
        case 'Astronaut':
            return <AstronautIcon/>
        case 'Atom':
            return <AtomIcon/>
        case 'BlackHole':
            return <BlackHoleIcon/>
        case 'Eagle':
            return <EagleIcon/>
        case 'Galaxy':
            return <GalaxyIcon/>
        case 'Invader':
            return <InvaderIcon/>
        case 'Iss':
            return <IssIcon/>
        case 'Meteor':
            return <MeteorIcon/>
        case 'Planet':
            return <PlanetIcon/>
        case 'Radar':
            return <RadarIcon/>
        case 'Rocket':
            return <RocketIcon/>
        case 'Rover':
            return <RoverIcon/>
        case 'Satellite':
            return <SatelliteIcon/>
        case 'SolarSystem':
            return <SolarSystemIcon/>
        case 'Sputnik':
            return <SputnikIcon/>
        case 'Station':
            return <StationIcon/>
        case 'Telescope':
            return <TelescopeIcon/>
        case 'Ufo':
            return <UfoIcon/>
        case 'Atat':
            return <AtatIcon/>
        case 'BobaFett':
            return <BobaFettIcon/>
        case 'C3po':
            return <C3poIcon/>
        case 'Chewey':
            return <CheweyIcon/>
        case 'Deathstar':
            return <DeathstarIcon/>
        case 'Empire':
            return <EmpireIcon/>
        case 'Leah':
            return <LeahIcon/>
        case 'Logo':
            return <LogoIcon/>
        case 'MFalcon':
            return <MFalconIcon/>
        case 'Pilot':
            return <PilotIcon/>
        case 'R2':
            return <R2Icon/>
        case 'Rebels':
            return <RebelsIcon/>
        case 'Saber':
            return <SaberIcon/>
        case 'Tie':
            return <TieIcon/>
        case 'Trooper':
            return <TrooperIcon/>
        case 'Vader':
            return <VaderIcon/>
        case 'Xwing':
            return <XwingIcon/>
        case 'Yoda':
            return <YodaIcon/>
        case 'Badminton':
            return <BadmintonIcon/>
        case 'Baseball':
            return <BaseballIcon/>
        case 'Basketball':
            return <BasketballIcon/>
        case 'Bike':
            return <BikeIcon/>
        case 'Bowling':
            return <BowlingIcon/>
        case 'Boxing':
            return <BoxingIcon/>
        case 'Cricket':
            return <CricketIcon/>
        case 'Football':
            return <FootballIcon/>
        case 'Formula':
            return <FormulaIcon/>
        case 'Golf':
            return <GolfIcon/>
        case 'Kyak':
            return <KyakIcon/>
        case 'Pool':
            return <PoolIcon/>
        case 'Puck':
            return <PuckIcon/>
        case 'Soccer':
            return <SoccerIcon/>
        case 'TableTennis':
            return <TableTennisIcon/>
        case 'Tennis':
            return <TennisIcon/>
        case 'Trophy':
            return <TrophyIcon/>
        case 'Volleyball':
            return <VolleyballIcon/>
        case 'Antman':
            return <AntmanIcon/>
        case 'ArcReactor':
            return <ArcReactorIcon/>
        case 'Avengers':
            return <AvengersIcon/>
        case 'BlackPanther':
            return <BlackPantherIcon/>
        case 'CptAmerica':
            return <CptAmericaIcon/>
        case 'CptMarvel':
            return <CptMarvelIcon/>
        case 'Gauntlet':
            return <GauntletIcon/>
        case 'Groot':
            return <GrootIcon/>
        case 'Hawkeye':
            return <HawkeyeIcon/>
        case 'Hulk':
            return <HulkIcon/>
        case 'Ironman':
            return <IronmanIcon/>
        case 'Loki':
            return <LokiIcon/>
        case 'Scepter':
            return <ScepterIcon/>
        case 'Shield':
            return <ShieldIcon/>
        case 'Spiderman':
            return <SpidermanIcon/>
        case 'Stormbreaker':
            return <StormbreakerIcon/>
        case 'Thanos':
            return <ThanosIcon/>
        case 'Widow':
            return <WidowIcon/>
        case 'Xmen':
            return <XmenIcon/>
        default:
            return null
    }
}



export default Icon