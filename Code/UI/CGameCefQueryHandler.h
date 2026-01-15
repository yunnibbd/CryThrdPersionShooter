#pragma once
#include <Crymium/Core/ICrymiumContainer.h>

class CGameCefQueryHandler : public ICefQueryHandler
{
public:
	CGameCefQueryHandler(ICrymiumContainer* pCrymiumContainer);

	virtual bool CanHandle(const std::string& request) override;

	virtual void Handle(const std::string& request) override;

private:
	ICrymiumContainer* m_pCrymiumContainer = nullptr;
};
