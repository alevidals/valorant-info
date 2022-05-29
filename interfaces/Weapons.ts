export interface Weapon {
  uuid: string
  displayName: string
  category: string
  defaultSkinUuid: string
  displayIcon: string
  killStreamIcon: string
  assetPath: string
  weaponStats: WeaponStats | null
  shopData: ShopData | null
  skins: Skin[]
}

interface ShopData {
  cost: number
  category: string
  categoryText: string
  gridPosition: GridPosition | null
  canBeTrashed: boolean
  image: null
  newImage: string
  newImage2: null
  assetPath: string
}

interface GridPosition {
  row: number
  column: number
}

interface Skin {
  uuid: string
  displayName: string
  themeUuid: string
  contentTierUuid: null | string
  displayIcon: string
  wallpaper: null | string
  assetPath: string
  chromas: Chroma[]
  levels: Level[]
}

export interface Chroma {
  uuid: string
  displayName: string
  displayIcon: string
  fullRender: string
  swatch: null | string
  streamedVideo: null | string
  assetPath: string
}

export interface Level {
  uuid: string
  displayName: null | string
  levelItem: LevelItem | null
  displayIcon: null | string
  streamedVideo: null | string
  assetPath: string
}

enum LevelItem {
  EEquippableSkinLevelItemAnimation = 'EEquippableSkinLevelItem::Animation',
  EEquippableSkinLevelItemFinisher = 'EEquippableSkinLevelItem::Finisher',
  EEquippableSkinLevelItemFishAnimation = 'EEquippableSkinLevelItem::FishAnimation',
  EEquippableSkinLevelItemInspectAndKill = 'EEquippableSkinLevelItem::InspectAndKill',
  EEquippableSkinLevelItemKillBanner = 'EEquippableSkinLevelItem::KillBanner',
  EEquippableSkinLevelItemKillCounter = 'EEquippableSkinLevelItem::KillCounter',
  EEquippableSkinLevelItemKillEffect = 'EEquippableSkinLevelItem::KillEffect',
  EEquippableSkinLevelItemRandomizer = 'EEquippableSkinLevelItem::Randomizer',
  EEquippableSkinLevelItemTopFrag = 'EEquippableSkinLevelItem::TopFrag',
  EEquippableSkinLevelItemVFX = 'EEquippableSkinLevelItem::VFX',
  EEquippableSkinLevelItemVoiceover = 'EEquippableSkinLevelItem::Voiceover',
}

interface WeaponStats {
  fireRate: number
  magazineSize: number
  runSpeedMultiplier: number
  equipTimeSeconds: number
  reloadTimeSeconds: number
  firstBulletAccuracy: number
  shotgunPelletCount: number
  wallPenetration: WallPenetration
  feature: null | string
  fireMode: null | string
  altFireType: AltFireType | null
  adsStats: AdsStats | null
  altShotgunStats: AltShotgunStats | null
  airBurstStats: AirBurstStats | null
  damageRanges: DamageRange[]
}

interface AdsStats {
  zoomMultiplier: number
  fireRate: number
  runSpeedMultiplier: number
  burstCount: number
  firstBulletAccuracy: number
}

interface AirBurstStats {
  shotgunPelletCount: number
  burstDistance: number
}

enum AltFireType {
  EWeaponAltFireDisplayTypeADS = 'EWeaponAltFireDisplayType::ADS',
  EWeaponAltFireDisplayTypeAirBurst = 'EWeaponAltFireDisplayType::AirBurst',
  EWeaponAltFireDisplayTypeShotgun = 'EWeaponAltFireDisplayType::Shotgun',
}

interface AltShotgunStats {
  shotgunPelletCount: number
  burstRate: number
}

interface DamageRange {
  rangeStartMeters: number
  rangeEndMeters: number
  headDamage: number
  bodyDamage: number
  legDamage: number
}

enum WallPenetration {
  EWallPenetrationDisplayTypeHigh = 'EWallPenetrationDisplayType::High',
  EWallPenetrationDisplayTypeLow = 'EWallPenetrationDisplayType::Low',
  EWallPenetrationDisplayTypeMedium = 'EWallPenetrationDisplayType::Medium',
}
