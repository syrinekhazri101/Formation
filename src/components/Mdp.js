'use client';
import React, { useState, useMemo } from 'react';
import { Check, Eye, EyeOff, X } from 'lucide-react';

const PASSWORD_REQUIREMENTS = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /[0-9]/, text: 'At least 1 number' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
    { regex: /[!-\/:-@[-`{-~]/, text: 'At least 1 special character' },
];

const STRENGTH_CONFIG = {
    colors: {
        0: 'bg-secondary',
        1: 'bg-danger',
        2: 'bg-warning',
        3: 'bg-info',
        4: 'bg-primary',
        5: 'bg-success',
    },
    texts: {
        0: 'Enter a password',
        1: 'Weak password',
        2: 'Medium password!',
        3: 'Strong password!!',
        4: 'Very Strong password!!!',
    },
};

const PasswordInput = () => {
    const [password, setPassword] = useState('');

    const calculateStrength = useMemo(() => {
        const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
            met: req.regex.test(password),
            text: req.text,
        }));
        return {
            score: requirements.filter((req) => req.met).length,
            requirements,
        };
    }, [password]);

    return (
        <div className="container mt-4 w-50">
            <form className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <div className="input-group">
                    <input
                        id="password"
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        aria-invalid={calculateStrength.score < 4}
                        aria-describedby="password-strength"
                        className="form-control"
                    />
                </div>
            </form>

            <div
                className="progress mb-3"
                role="progressbar"
                aria-valuenow={calculateStrength.score}
                aria-valuemin={0}
                aria-valuemax={5}>
                <div
                    className={`progress-bar ${STRENGTH_CONFIG.colors[calculateStrength.score]
                        }`}
                    style={{ width: `${(calculateStrength.score / 5) * 100}%` }}
                />
            </div>

            <p id="password-strength" className="mb-2 d-flex justify-content-between">
                <span>Must contain:</span>
                <span>
                    {STRENGTH_CONFIG.texts[Math.min(calculateStrength.score, 4)]}
                </span>
            </p>

            <ul className="list-unstyled" aria-label="Password requirements">
                {calculateStrength.requirements.map((req, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                        {req.met ? (
                            <Check size={16} className="text-success me-2" />
                        ) : (
                            <X size={16} className="text-muted me-2" />
                        )}
                        <span
                            className={`small ${req.met ? 'text-success' : 'text-muted'
                                }`}>
                            {req.text}
                            <span className="visually-hidden">
                                {req.met ? ' - Requirement met' : ' - Requirement not met'}
                            </span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordInput;
