/** 设计令牌 */
export const COLORS = {
  accent: '#D4F05B',
  bg: '#FFFFFF',
  bgAlt: '#F9F9F9',
  text: '#0A0A0A',
  textMuted: '#6B6B6B',
  border: '#E8E8E8',
} as const

const img = (name: string) => `/assets/images/${name}`

/** 落地页图片资源 */
export const ASSETS = {
  heroSuite: img('hero-suite.png'),
  branchDecor: img('branch-decor.png'),
  voiceSpeaker: img('voice-speaker.png'),
  posTerminal: img('pos-terminal.png'),
  greeterRobot: img('greeter-robot.png'),
  servingRobot: img('serving-robot.png'),
  walletPhone: img('wallet-phone.png'),
  analyticsDashboard: img('pos-terminal.png'),
  robotsPair: img('robots-pair.png'),
  integrationDevices: img('wallet-phone.png'),
  stepWelcome: img('greeter-robot.png'),
  stepOrder: img('pos-terminal.png'),
  stepServe: img('serving-robot.png'),
  stepReturn: img('wallet-phone.png'),
  avatars: [
    img('avatar-1.png'),
    img('avatar-2.png'),
    img('avatar-3.png'),
    img('avatar-4.png'),
  ],
  testimonials: [
    img('avatar-1.png'),
    img('avatar-2.png'),
    img('avatar-3.png'),
  ],
} as const

export const LOGO_NAMES = [
  'Yard House',
  'Panda Express',
  'True Food Kitchen',
  'Kura',
  "P.F. Chang's",
  "Cooper's Hawk",
  'CAVA',
  'sweetgreen',
] as const
