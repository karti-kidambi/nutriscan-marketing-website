import React from 'react';
import { Database, ShieldAlert, Zap, Lock } from 'lucide-react';

export default function TelemetryStrip() {
  const stats = [
    {
      icon: Database,
      value: '3.2M+',
      label: 'Global & Indian Packaged Records',
      sub: 'Open Food Facts & GS1 Registry',
    },
    {
      icon: ShieldAlert,
      value: '2,400+',
      label: 'Additives & Chemical E-Codes',
      sub: 'Flagged with EU & WHO Safety Limits',
    },
    {
      icon: Zap,
      value: '< 450ms',
      label: 'Average Query Resolution',
      sub: 'Ultra-Fast Browser & Server Pipeline',
    },
    {
      icon: Lock,
      value: '100% Free',
      label: 'Conflict-Free Open Intelligence',
      sub: 'Zero Paid Product Promotions or Ads',
    },
  ];

  return (
    <section className="startup-telemetry">
      <div className="startup-container">
        <div className="telemetry-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div className="telemetry-item" key={i}>
                <div className="telemetry-icon-box">
                  <Icon size={22} />
                </div>
                <div className="telemetry-data">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                  <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>{stat.sub}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
