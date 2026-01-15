#include "StdAfx.h"
#include "CGameCefQueryHandler.h"

CGameCefQueryHandler::CGameCefQueryHandler(ICrymiumContainer* pCrymiumContainer)
	: m_pCrymiumContainer(pCrymiumContainer)
{
}

bool CGameCefQueryHandler::CanHandle(const std::string& request)
{
	return true;
}

void CGameCefQueryHandler::Handle(const std::string& request)
{
	if (request == "new-game")
	{
		gEnv->pConsole->ExecuteString("map example", false, true);
		if (m_pCrymiumContainer != nullptr)
		{
			m_pCrymiumContainer->GetUiCloser()->Close();
			m_pCrymiumContainer->GetUiActivator()->Activate("SimpleUI");
		}
	}
	else if (request == "quit-game")
	{
		if (m_pCrymiumContainer != nullptr)
		{
			m_pCrymiumContainer->GetUiCloser()->Close();
		}

		gEnv->pSystem->Quit();
	}
}
