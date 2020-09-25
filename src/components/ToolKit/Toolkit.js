import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ITicketIcon } from 'assets/icon/iticket.svg';
import { ReactComponent as CloudVaultIcon } from 'assets/icon/cloudvault.svg';
import { ReactComponent as AutomationIcon } from 'assets/icon/automation.svg';
import { ReactComponent as TimeSeriesIcon } from 'assets/icon/timeseries.svg';
import { ReactComponent as KnowledgeBaseIcon } from 'assets/icon/kb.svg';
import { ReactComponent as EquipmentIcon } from 'assets/icon/equipment.svg';
import { ReactComponent as SystemInfoIcon } from 'assets/icon/systeminfo.svg';
import { ReactComponent as InventoryIcon } from 'assets/icon/inventory.svg';
import { ReactComponent as TroubleshootingIcon } from 'assets/icon/troubleshooting.svg';
import { ReactComponent as WarrantyIcon } from 'assets/icon/warranty.svg';

const ToolKit = () => (
  <section className="section-toolkit">
    <div className="card-master">
      <header className="toolkit-card-header">
        <h1 className="card-master-header">
          Popular
          <br />
          Tool
          <br />
          Kits
        </h1>
      </header>

      <div className="card-author-master">
        <div className="author-name">
          <div className="author-name-prefix">Created By</div>
          <p className="prefix-p">Infrastructure Service Storage Team</p>
        </div>
      </div>
    </div>

    <div className="card-list">
      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Application</p>
          <Link to="/admin/iticket">
            <h2>iTicket</h2>
          </Link>
          {/* <ul className="card-list-item">
            <li>Dashboard</li>
            <li>Breakfix</li>
            <li>Template</li>
            <li>Status</li>
            <li>Request</li>
          </ul> */}
        </header>

        <div className="card-author">
          <a className="author-avatar" href="/tool/iticket">
            <ITicketIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Application</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Assets</p>
          <Link to="/admin/storage-equipments">
            <h2>Storage Equipments</h2>
          </Link>
          <ul className="card-list-item">
            {/* <li>Warranty Info</li>
            <li>Licensing</li>
            <li>Systems Expiration date</li>
            <li>Miscellanous Info</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <EquipmentIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Assets</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Data Analysis</p>
          <Link to="/admin/system-info">
            <h2>System Info</h2>
          </Link>
          <ul className="card-list-item">
            {/* <li>Usage</li>
            <li>Availability</li>
            <li>Capacity</li>
            <li>Raw data</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <SystemInfoIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Information</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Data Analysis</p>
          <Link to="/admin/warranty-tracker">
            <h2>Warranty Tracker</h2>
          </Link>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <WarrantyIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Information</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>How To</p>
          <Link to="/admin/knowledge-base">
            <h2>Knowledge Base</h2>
          </Link>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <KnowledgeBaseIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">How To</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Application</p>
          <Link to="/admin/time-series">
            <h2>Time Series</h2>
          </Link>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <TimeSeriesIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Application</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">mysql</a>
        </div>
      </article>
      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Application</p>
          <Link to="/admin/cloudvault">
            <h2>CloudVault</h2>
          </Link>
          {/* <ul className="card-list-item">
            <li>Bucket Info</li>
            <li>Failed Upload Reports</li>
            <li>Index Database Metrics</li>
            <li>Containers Locator</li>
            <li>Application logs</li>
          </ul> */}
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <CloudVaultIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Application</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">python</a>
          <a href="#section-toolkit">mysql</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Automation</p>
          <Link to="/admin/automation">
            <h2>Automation</h2>
          </Link>
          {/* <ul className="card-list-item">
            <li>Scripts</li>
            <li>Automate things</li>
            <li>Cron-jobs</li>
          </ul> */}
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <AutomationIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Automation</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>Assets</p>
          <Link to="/admin/inventory">
            <h2>Inventory</h2>
          </Link>
          <ul className="card-list-item">
            {/* <li>FRU info</li>
            <li>Threshold</li>
            <li>Parts Quantity</li>
            <li>Par level</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <InventoryIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Assets</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">canvas</a>
        </div>
      </article>

      <article className="article-card">
        <header className="toolkit-card-header">
          <p>How To</p>
          <Link to="/admin/troubleshooting">
            <h2>Troubleshooting</h2>
          </Link>
          <ul className="card-list-item">
            {/* <li>Self-Healing</li>
            <li>Volume Auto Growth</li>
            <li>Filers CRC Report</li>
            <li>System Configuration</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <TroubleshootingIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">How To</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">mysql</a>
        </div>
      </article>
    </div>
  </section>
);

export default ToolKit;
