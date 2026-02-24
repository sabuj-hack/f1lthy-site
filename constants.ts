import { Product, StatusState, Announcement } from './types';
import { ShieldCheck, AlertTriangle, Hammer, XCircle, Activity } from 'lucide-react';

export const APP_NAME = "AIMXIT CHEATS";
export const DISCORD_LINK = "https://discord.gg/r8ffvkPr"; // Your Discord link

// --- CONFIGURATION ---
// Edit this value to set a static key for everyone. 
// If you leave it empty (""), a random key for each user.
export const FREE_TRIAL_KEY = "AIMXIT-1"; 

export const PRODUCTS: Product[] = [
  {
    id: 'main_panel',
    name: 'AIMXIT INTERNAL MAX',
    category: 'Panel',
    status: StatusState.SAFE,
    lastUpdated: '1 hour ago',
    version: 'v2.4.0',
    downloadUrl: 'https://www.mediafire.com/file/2t3o0it2w9w370q/AIMXIT_INTERNAL_MAX.rar/file',
    requirementUrl: 'https://www.mediafire.com/file/2i9msrnpdoijpw8/Requirements.rar/file',
    recommendedEmulatorUrl: 'https://www.mediafire.com/file/4fxgkc0b1cqneg1/MSI-APP-Player.zip/file', 
    cleanEmulatorUrl: 'https://www.ldplayer.net/', 
    description: 'The comprehensive internal solution. If you face Error 153, please check the requirements file and run as admin.',
    youtubeVideoId: 'KgGXx_bcuHM',
    features: [
      { name: "Aimbot Ai", status: 'SAFE' },
      { name: "Aimbot Rage", status: 'UNSAFE' },
      { name: "Aimbot Silent", status: 'UNSAFE' },
      { name: "Aimbot External", status: 'SAFE' },
      { name: "Avoid Fallen", status: 'SAFE' },
      { name: "Draw Fov", status: 'SAFE' },
      { name: "Mouse Aimbot", status: 'SAFE' },
      { name: "All Esp", status: 'SAFE' },
      { name: "All Chams", status: 'SAFE' },
      { name: "Steady Aim", status: 'SAFE' },
      { name: "Infinite Ammo", status: 'RISK' },
      { name: "Camera Hack", status: 'RISK' },
      { name: "AimLock", status: 'UNSAFE' },
      { name: "Fast Switch", status: 'RISK' },
      { name: "Ultimate Fire", status: 'UNSAFE' },
      { name: "WallHack 1", status: 'UNSAFE' },
      { name: "WallHack 2", status: 'UNSAFE' },
      { name: "Fly To Roof", status: 'UNSAFE' },
      { name: "Standard Speed", status: 'UNSAFE' },
      { name: "Hyper Speed", status: 'UNSAFE' },
      { name: "Front Player", status: 'SAFE' },
      { name: "Side Player", status: 'SAFE' },
      { name: "Enemy Pull", status: 'SAFE' },
      { name: "Teleport To Spawn", status: 'SAFE' },
      { name: "Teleport To Map", status: 'SAFE' },
      { name: "Up Player", status: 'SAFE' },
      { name: "Down Player", status: 'SAFE' },
    ]
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann_error_153_fix',
    title: '⚠️ Fix for Error 153',
    date: '15 Nov 2025',
    content: '• Download and install all "Requirement file" drivers\n• Turn off Antivirus / Windows Defender\n• Right click and "Run as Administrator"',
    type: 'warning'
  },
  {
    id: 'ann_update_1',
    title: '🚀 Update — 22 Feb 2026',
    date: '14 Nov 2025',
    content: '• Added Enemy Pull (SAFE Status)\n• Added Fast Switch\n• Added Hyper Speed\n• Added Camera Hack\n• Updated For OB51',
    type: 'success'
  }
];

export const STATUS_CONFIG = {
  [StatusState.UNDETECTED]: {
    color: 'text-brand-500',
    bgColor: 'bg-brand-500/10',
    borderColor: 'border-brand-500/20',
    icon: ShieldCheck,
    label: 'Undetected'
  },
  [StatusState.DETECTED]: {
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    icon: XCircle,
    label: 'Detected'
  },
  [StatusState.UPDATING]: {
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    icon: Hammer,
    label: 'Updating'
  },
  [StatusState.TESTING]: {
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/20',
    icon: Activity,
    label: 'Testing'
  },
  [StatusState.OFFLINE]: {
    color: 'text-zinc-500',
    bgColor: 'bg-zinc-500/10',
    borderColor: 'border-zinc-500/20',
    icon: AlertTriangle,
    label: 'Offline'
  }
};
