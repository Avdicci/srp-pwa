'use client'
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import SettingsSaved from '../components/SettingsSaved';
import InstallPrompt from '../components/InstallPrompt';
import NotificationManager from '../components/NotificationManager';
import AchievementTracker from '../components/AchievementTracker';
import { SettingsProvider } from '../contexts/SettingsContext';
import { useEffect } from 'react';

// ...

export const metadata = {
  title: "SRP PWA",
  description: "A simple SRP-based Progressive Web App",
};