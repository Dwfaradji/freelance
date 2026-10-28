'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { STORAGE_KEY_DIAGNOSTIC } from '@/lib/diagnostic/constants';
import { buildDiagnosticReport } from '@/lib/diagnostic/report';
import { OrganizationProfile } from '@/lib/diagnostic/types';
import DiagnosticModal from './DiagnosticModal';
import DiagnosticTrigger from './DiagnosticTrigger';

const defaultProfile: OrganizationProfile = {
  structureType: 'association_gestionnaire',
  size: '51-100',
  siteCount: '2-5',
  mobility: 'regularly',
  fleet: '6-15',
  name: '',
};

export default function DiagnosticTool() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState<OrganizationProfile>(defaultProfile);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const isHydratedRef = React.useRef(false);

  // Restauration de session client
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = window.sessionStorage.getItem(STORAGE_KEY_DIAGNOSTIC);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object') {
            if (parsed.profile) setProfile(parsed.profile);
            if (parsed.answers) setAnswers(parsed.answers);
          }
        }
      }
    } catch {
      // Ignorer silencieusement
    } finally {
      isHydratedRef.current = true;
    }
  }, []);

  // Sauvegarde en sessionStorage
  useEffect(() => {
    if (!isHydratedRef.current) return;
    try {
      if (typeof window !== 'undefined') {
        const stateToSave = {
          profile,
          answers,
        };
        window.sessionStorage.setItem(STORAGE_KEY_DIAGNOSTIC, JSON.stringify(stateToSave));
      }
    } catch {
      // Ignorer
    }
  }, [profile, answers]);

  const hasStarted = Object.keys(answers).length > 0;
  const hasCompleted = Object.keys(answers).length >= 17;

  // Calcul du rapport en temps réel
  const report = useMemo(() => {
    return buildDiagnosticReport(profile, answers);
  }, [profile, answers]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (typeof window !== 'undefined' && 'gtag' in window) {
      try {
        (window as unknown as { gtag: (type: string, name: string) => void }).gtag(
          'event',
          'diagnostic_modal_opened'
        );
      } catch {
        // Ignorer
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProfileChange = (updates: Partial<OrganizationProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const handleAnswerChange = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleReset = () => {
    setAnswers({});
    setProfile(defaultProfile);
    try {
      if (typeof window !== 'undefined') {
        window.sessionStorage.removeItem(STORAGE_KEY_DIAGNOSTIC);
      }
    } catch {
      // Ignorer
    }
  };

  return (
    <>
      {/* 1. CARTE D'ACCÈS INTERACTIVE SUR LA PAGE */}
      <DiagnosticTrigger
        onOpen={handleOpenModal}
        onReset={handleReset}
        hasStarted={hasStarted}
        hasCompleted={hasCompleted}
        report={report}
      />

      {/* 2. MODAL ÉTAPE PAR ÉTAPE IMMERSIVE */}
      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        profile={profile}
        onProfileChange={handleProfileChange}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        onReset={handleReset}
        report={report}
      />
    </>
  );
}
